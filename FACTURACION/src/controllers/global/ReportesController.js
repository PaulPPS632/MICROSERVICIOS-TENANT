// const Entidad = require("../../models/users/Entidad");
// const ProductoSerie = require("../../models/inventory/ProductoSerie");
// const Producto = require("../../models/inventory/Producto");

const Venta = require("../../models/documents/Venta");
const { Op, Sequelize } = require("sequelize");
const DetalleVenta = require("../../models/documents/DetalleVenta");
const SerieDetalleVenta = require("../../models/documents/SerieDetalleVenta");
const { default: axios } = require("axios");
const { sequelize } = require("../../databases/database");
class ReportesController {
  async VentasxUsuario(req, res) {
    try {
      // Agrupar por fecha (sin hora) y entidad para obtener ventas diarias por usuario
      const ventas = await Venta.findAll({
        attributes: [
          [Sequelize.fn("DATE", Sequelize.col("createdAt")), "fecha"], // Truncar a solo fecha
          [Sequelize.fn("sum", Sequelize.col("total")), "totalVentas"],
          "EntidadId",
        ],
        group: ["fecha", "EntidadId"],
        order: [["fecha", "ASC"]],
      });
      const ids = [...new Set(ventas.flatMap((c) => [c.EntidadId]))];
      const { data: entidades } = await axios.post(
        `${process.env.SERVICE_TENANT_URL}/entidad/batch`,
        { ids }
      );
      // Formatear datos para el gráfico
      const series = [];
      const fechas = [];
      ventas.forEach((venta) => {
        const fecha = venta.getDataValue("fecha");

        // Agregar fechas únicas para el eje X
        if (!fechas.includes(fecha)) {
          fechas.push(fecha);
        }

        // Buscar si ya existe un usuario en la serie
        let usuarioData = series.find(
          (serie) =>
            serie.name ===
            entidades.find((e) => e.id === venta.EntidadId)?.nombre
        );

        if (!usuarioData) {
          usuarioData = {
            name: entidades.find((e) => e.id === venta.EntidadId).nombre,
            data: [],
          };
          series.push(usuarioData);
        }

        // Agregar ventas a la serie correspondiente
        usuarioData.data.push(venta.getDataValue("totalVentas"));
      });

      res.json({ series, fechas });
    } catch (error) {
      console.error("Error obteniendo las ventas:", error);
      res.status(500).json({ message: "Error obteniendo las ventas" });
    }
  }
  async ProductosMasVendidos(req, res) {
    const fechaInicio = new Date();
    fechaInicio.setDate(fechaInicio.getDate() - 30); // Resta 30 días a la fecha actual

    try {
      const resultados = await DetalleVenta.findAll({
        raw: true,
        attributes: [
          [Sequelize.fn("COUNT", Sequelize.col("cantidad")), "total_vendido"], // Suma de cantidades
          "seriesDetalles.productoSerie.producto.id", // ID del producto
          "seriesDetalles.productoSerie.producto.nombre", // Nombre del producto
        ],
        include: [
          {
            model: SerieDetalleVenta,
            as: "seriesDetalles",
            attributes: [], // No necesitamos atributos de SeriesDetalleVenta
            include: [
              {
                model: ProductoSerie,
                as: "productoSerie",
                attributes: [], // No necesitamos atributos de ProductoSerie
                include: [
                  {
                    model: Producto,
                    as: "producto",
                    attributes: [], // Seleccionamos id y nombre
                  },
                ],
              },
            ],
          },
        ],
        where: {
          createdAt: {
            [Op.gte]: fechaInicio, // Usamos fechaInicio en lugar de Sequelize.literal
          },
        },
        group: [
          "seriesDetalles.productoSerie.producto.id", // Agrupamos por id del producto
          "seriesDetalles.productoSerie.producto.nombre", // Agrupamos por nombre del producto
        ],
        order: [[Sequelize.fn("SUM", Sequelize.col("cantidad")), "DESC"]],
      });
      const cantidades = [];
      const nombres = [];
      resultados.forEach((resultado) => {
        cantidades.push(resultado.total_vendido);
        nombres.push(resultado.nombre);
      });
      res.status(200).json({ cantidades, nombres });
    } catch (error) {
      console.error("Error obteniendo productos más vendidos:", error);
      res
        .status(500)
        .json({ message: "Error obteniendo productos más vendidos" });
    }
  }
}

module.exports = new ReportesController();
