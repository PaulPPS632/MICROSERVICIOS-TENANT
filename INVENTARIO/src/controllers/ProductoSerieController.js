const ProductoSerie = require("../models/ProductoSerie.js");
const Producto = require("../models/Producto.js");
const SubCategoria = require("../models/SubCategoria.js");
const CategoriaMarca = require("../models/CategoriaMarca.js");
const Marca = require("../models/Marca.js");
const Categoria = require("../models/Categoria.js");
const EstadoProducto = require("../models/EstadoProducto.js");
const { Op } = require("sequelize");
const { sequelize } = require("../databases/database.js");
class ProductoSerieController {
  async getSeriesByProductoId(req, res) {
    const { id } = req.params;
    const { tenantid } = req.headers;
    const series = await ProductoSerie.findAll({
      where: {
        ProductoId: id,
        EstadoProductoId: 1,
        tenantId: tenantid,
      },
      include: [{ model: EstadoProducto, attributes: ["nombre"] }],
      attributes: ["sn"],
    });
    return res.json(series);
  }
  async getBelong(req, res) {
    const { sn } = req.params;
    const { tenantid } = req.headers;
    const productoSerie = await ProductoSerie.findOne({
      where: {
        sn: sn,
        tenantId: tenantid,
        EstadoProductoId: 1,
      },
      attributes: ["ProductoId"],
    });
    const producto = await Producto.findOne({
      where: { id: productoSerie.ProductoId },
      include: [
        {
          model: SubCategoria,
          required: true,
          foreignKey: "SubCategoriaId",
          include: {
            model: Categoria,
            required: true,
            foreignKey: "CategoriaId",
          },
        },

        {
          model: CategoriaMarca,
          required: true,
          foreignKey: "CategoriaMarcaId",
          include: {
            model: Marca,
            required: true,
            foreignKey: "MarcaId",
          },
        },
      ],
    });
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    const productoResponse = {
      id: producto.id,
      nombre: producto.nombre,
      pn: producto.pn,
      descripcion: producto.descripcion,
      stock: producto.stock,
      precio: producto.precio,
      subcategoria_nombre: producto.subcategoria_nombre,
      garantia_cliente: producto.garantia_cliente,
      garantia_total: producto.garantia_total,
      categoria_nombre: producto.categoria_nombre,
      imagen_principal: producto.imagen_principal,
      imageurl: producto.imageurl,
    };
    return res.status(200).json(productoResponse);
  }
  // async delete(req, res) {
  //   const { sn } = req.params;
  //   try {
  //     const productoSerie = await ProductoSerie.findOne({
  //       where: { sn },
  //     });
  //     if (!productoSerie) {
  //       return res
  //         .status(404)
  //         .json({ message: "Producto Serie no encontrado" });
  //     }
  //     const detalleCompra = await DetalleCompra.findOne({
  //       where: { ProductoSerieId: productoSerie.id },
  //     });

  //     await productoSerie.destroy();
  //     await detalleCompra.destroy();
  //     const producto = await Producto.findOne({
  //       where: { id: productoSerie.ProductoId },
  //     });
  //     producto.stock = producto.stock - 1;
  //     producto.save();
  //     return res.status(200).json({ message: "Producto Serie eliminado" });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // }
  async isExist(req, res) {
    try {
      const { series } = req.body;
      const seriesExistentes = await ProductoSerie.findAll({
        where: {
          sn: {
            [Op.in]: series,
          },
        },
        attributes: ["sn"],
      });
      const seriesDuplicadas = seriesExistentes.map((serie) => serie.sn);
      return res.status(200).json(seriesDuplicadas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async create(req, res) {
    const { series, productoId, tenantId } = req.body;
    try {
      const creadas = await ProductoSerie.bulkCreate(
        series.map((serie) => ({
          sn: serie,
          ProductoId: productoId,
          tenantId: tenantId,
          EstadoProductoId: 1,
        }))
      );
      await Producto.increment("stock", {
        by: series.length,
        where: { id: productoId },
      });
      return res.status(200).json(creadas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async Batch(req, res) {
    const { ProductosSeriesId } = req.body;

    const { tenantid } = req.headers;
    try {
      const series = await ProductoSerie.findAll({
        where: {
          id: {
            [Op.in]: ProductosSeriesId,
          },
        },
        include: [
          { model: Producto, as: "producto", attributes: ["nombre", "id"] },
        ],
        attributes: ["id", "sn"],
      });
      return res.status(200).json(series);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async discount(req, res) {
    const { series, productoId, tenantId } = req.body;
    if (!series || !productoId || !tenantId) {
      return res.status(400).json({ message: "Faltan parámetros requeridos." });
    }
    console.log("INGRESA EN DISCOUNT INVENTARIO SERVICE");

    const transaction = await sequelize.transaction(); // Asume que tienes un objeto `sequelize` configurado

    try {
      // Actualizar el estado de las series
      const [affectedRows] = await ProductoSerie.update(
        { EstadoProductoId: 2 },
        {
          where: {
            sn: {
              [Op.in]: series,
            },
            tenantId,
          },
          transaction,
        }
      );

      if (affectedRows === 0) {
        throw new Error("No se encontraron las series para actualizar.");
      }

      // Decrementar el stock del producto
      await Producto.decrement("stock", {
        by: series.length,
        where: { id: productoId, tenantId },
        transaction,
      });

      // Obtener las series actualizadas
      const updatedSeries = await ProductoSerie.findAll({
        where: {
          sn: {
            [Op.in]: series,
          },
          tenantId,
        },
        transaction,
      });

      await transaction.commit();
      return res.status(200).json(updatedSeries);
    } catch (error) {
      await transaction.rollback();
      console.error("Error en discount:", error.message);
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProductoSerieController();
