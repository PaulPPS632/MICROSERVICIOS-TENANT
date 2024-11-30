const { Op } = require("sequelize");
const Compra = require("../../models/documents/Compra.js");
const DetalleCompra = require("../../models/documents/DetalleCompra.js");
const { default: axios } = require("axios");

class CompraController {
  async Register(req, res) {
    const {
      usuario_id,
      documento,
      documento_cliente,
      fecha_emision,
      fecha_vencimiento,
      fechapago,
      formapago,
      id_tipocondicion,
      id_tipomoneda,
      id_tipopago,
      tipo_cambio,
      nota,
      impuesto,
      gravada,
      total,
      detalles,
    } = req.body;
    const { tenantid } = req.headers;
    if (documento_cliente == null || documento_cliente == "")
      return res.status(400).json({ message: "El cliente es requerido" });
    if (detalles.length == 0)
      return res.status(400).json({ message: "No hay productos en la compra" });
    try {
      const seriesRegistradas = detalles.flatMap((detalle) => detalle.series);
      const seriesexistentes = await axios.post(
        `${process.env.SERVICE_INVENTARIO_URL}/productoserie/exist`,
        { series: seriesRegistradas }
      );
      if (seriesexistentes.data.length > 0) {
        return res.status(400).json({
          message:
            "Algunas series ya están registradas: " + seriesexistentes.data,
        });
      }
      const CompraRegist = await Compra.create({
        EntidadNegocioId: usuario_id,
        documento,
        EntidadId: documento_cliente,
        fecha_emision: new Date(fecha_emision),
        fecha_vencimiento: new Date(fecha_vencimiento),
        fechapago: new Date(fechapago),
        formapago,
        TipoCondicionId: id_tipocondicion,
        TipoMonedaId: id_tipomoneda,
        TipoPagoId: id_tipopago,
        tipo_cambio: Math.round(tipo_cambio * 100) / 100,
        nota,
        impuesto: Math.round(impuesto * 100) / 100,
        gravada: Math.round(gravada * 100) / 100,
        total: Math.round(total * 100) / 100,
        tenantId: tenantid,
      });
      const productoIds = detalles.map((detalle) => detalle.id_producto);
      const responseProductos = await axios.post(
        `${process.env.SERVICE_INVENTARIO_URL}/producto/exist`,
        { productoIds: productoIds }
      );
      const productos = responseProductos.data;

      await Promise.all(
        detalles.map(async (detalle) => {
          const producto = productos.find((p) => p.id === detalle.id_producto);
          if (producto) {
            const responseProductoSerie = await axios.post(
              `${process.env.SERVICE_INVENTARIO_URL}/productoserie`,
              {
                series: detalle.series,
                productoId: producto.id,
                tenantId: tenantid,
              }
            );

            const datos = responseProductoSerie.data.map((productoserie) => ({
              CompraId: CompraRegist.id,
              ProductoSerieId: productoserie.id,
              sn: productoserie.sn,
              precio_neto: detalle.precio_unitario,
            }));
            await DetalleCompra.bulkCreate(datos);
          }
        })
      );
      return res.json({ message: "Compra Registrada Exitosamente" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al registrar la compra", error });
    }
  }

  async GetAll(req, res) {
    const { tenantid } = req.headers;
    const compras = await Compra.findAll({
      where: { tenantId: tenantid },
      attributes: [
        "id",
        "documento",
        "total",
        "fecha_emision",
        "EntidadNegocioId",
        "EntidadId",
      ],
      order: [["createdAt", "DESC"]],
    });
    // const respuesta = compras.map((compra) => ({
    //   id: compra.id,
    //   documento: compra.documento,
    //   total: compra.total,
    //   fecha_emision: compra.fecha_emision,
    //   cliente: compra.entidadClienteCompra.nombre,
    //   cliente_documento: compra.entidadClienteCompra.documento,
    //   negocio: compra.entidadNegocioCompra.nombre,
    //   negocio_documento: compra.entidadNegocioCompra.documento,
    // }));
    return res.status(200).json(compras);
  }

  async getById(req, res) {
    const { id } = req.params;
    const { tenantid } = req.headers;
    if (!id) return res.status(400).json({ message: "id no proporcionado" });
    const compra = await Compra.findOne({
      where: { id, tenantId: tenantid },
      include: [
        {
          model: DetalleCompra,
        },
      ],
    });

    if (!compra)
      return res.status(404).json({ message: "Compra no encontrada" });
    const ProductosSeries = [
      ...new Set(compra.DetalleCompras.flatMap((d) => [d.ProductoSerieId])),
    ];
    const responseProductosSeries = await axios.post(
      `${process.env.SERVICE_INVENTARIO_URL}/productoserie/batch`,
      { ProductosSeriesId: ProductosSeries }
    );
    const detallesMap = {};
    // responseProductosSeries.data.forEach((productoSerie) => {
    //   const { id, sn } = productoSerie;
    //   const { ProductoId, ProductoNombre } = productoSerie.producto;
    //   if (!detallesMap[ProductoId]) {
    //     detallesMap[ProductoId] = {
    //       id_producto: ProductoId,
    //       nombre: ProductoNombre, // Debes obtener el nombre real del producto si es necesario
    //       cantidad: 0,
    //       series: [],
    //       precio_unitario: detalle.precio_neto,
    //       precio_total: 0,
    //     };
    //   }
    //   detallesMap[productoSerie.id] = productoSerie;
    // });

    compra.DetalleCompras.forEach((detalle) => {
      const { ProductoSerieId, sn } = detalle;
      const { id, nombre } = responseProductosSeries.data.find(
        (ps) => ps.id === ProductoSerieId
      )?.producto;

      if (!detallesMap[id]) {
        detallesMap[id] = {
          id_producto: id,
          nombre: nombre, // Debes obtener el nombre real del producto si es necesario
          cantidad: 0,
          series: [],
          precio_unitario: detalle.precio_neto,
          precio_total: 0,
        };
      }
      detallesMap[id].cantidad += 1;
      detallesMap[id].series.push(sn);
      detallesMap[id].precio_total += detalle.precio_neto;
    });
    const detalles = Object.values(detallesMap);
    const compraResponse = {
      id: compra.id,
      documento: compra.documento,

      usuario_id: compra.EntidadNegocioId,
      documento_cliente: compra.EntidadId,

      //proveedor: compra.proveedor, // Asegúrate de incluir los datos del proveedor en la consulta
      //usuario: compra.usuario, // Asegúrate de incluir los datos del usuario en la consulta

      tipocondicion: compra.TipoCondicionId, // Asegúrate de incluir estos datos en la consulta
      tipopago: compra.TipoPagoId,
      tipomoneda: compra.TipoMonedaId,
      tipo_cambio: compra.tipo_cambio,
      fecha_emision: compra.fecha_emision,
      fecha_vencimiento: compra.fecha_vencimiento,
      nota: compra.nota,
      gravada: compra.gravada,
      impuesto: compra.impuesto,
      total: compra.total,
      fechapago: compra.fecha_pago,
      formapago: compra.formapago,
      detalles,
    };
    return res.status(200).json(compraResponse);
  }
  async getPaged(req, res) {
    const page = parseInt(req.query.page, 10) || 1;
    const size = parseInt(req.query.size, 10) || 10;
    const offset = (page - 1) * size; // Calcular el offset (cuántos registros saltar)
    const limit = size; // Número de registros por página
    const { tenantid } = req.headers;
    const { rows: compras, count: total } = await Compra.findAndCountAll({
      attributes: [
        "id",
        "documento",
        "total",
        "fecha_emision",
        "EntidadId",
        "EntidadNegocioId",
      ],
      where: {
        tenantId: tenantid,
      },
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });
    const ids = [
      ...new Set(compras.flatMap((c) => [c.EntidadId, c.EntidadNegocioId])),
    ];
    const { data: entidades } = await axios.post(
      `${process.env.SERVICE_TENANT_URL}/entidad/batch`,
      { ids }
    );
    // const respuesta = compras.map((compra) => ({
    //   id: compra.id,
    //   documento: compra.documento,
    //   total: compra.total,
    //   fecha_emision: compra.fecha_emision,
    //   cliente: compra.entidadClienteCompra.nombre,
    //   cliente_documento: compra.entidadClienteCompra.documento,
    //   negocio: compra.entidadNegocioCompra.nombre,
    //   negocio_documento: compra.entidadNegocioCompra.documento,
    // }));
    const comprasConEntidades = compras.map((compra) => ({
      id: compra.id,
      documento: compra.documento,
      total: compra.total,
      fecha_emision: compra.fecha_emision,
      cliente: entidades.find((e) => e.id === compra.EntidadId),
      negocio: entidades.find((e) => e.id === compra.EntidadNegocioId),
    }));

    res.status(200).json({
      documentos: comprasConEntidades,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit), // Calcular el total de páginas
      ids,
    });
  }
}

module.exports = new CompraController();
