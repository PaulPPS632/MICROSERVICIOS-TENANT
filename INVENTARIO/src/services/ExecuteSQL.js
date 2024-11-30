// const Categoria = require("../models/inventory/Categoria");
// const CategoriaMarca = require("../models/inventory/CategoriaMarca");
// const Marca = require("../models/inventory/Marca");
// const Producto = require("../models/inventory/Producto");
// const SubCategoria = require("../models/inventory/SubCategoria");
const Categoria = require("../models/Categoria");
const CategoriaMarca = require("../models/CategoriaMarca");
const Marca = require("../models/Marca");
const Producto = require("../models/Producto");
const SubCategoria = require("../models/SubCategoria");
const Electronica = require("../static/Electronica.json");
const Ferreteria = require("../static/Ferreteria.json");
// const Electronica = require("../static/Electronica2.json");
class ExecuteSql {
  async Execute(tiponegocio, tenantId) {
    try {
      // console.log(tiponegocio);
      // console.log("TENANTID EXECUTE: ", tenantId);
      let DATA;
      if (tiponegocio === "electronica") {
        DATA = Electronica;
      } else if (tiponegocio === "ferreteria") {
        DATA = Ferreteria;
      }
      const marcas = await Marca.bulkCreate(
        DATA.Marca.map((item) => ({
          nombre: item.nombre,
          tenantId: tenantId, // UUID predeterminado, puedes cambiarlo o pasarlo como parámetro
        }))
      );
      const categoriamarcas = await CategoriaMarca.bulkCreate(
        DATA.CategoriaMarca.map((item) => ({
          nombre: item.nombre,
          MarcaId: marcas[item.MarcaId - 1].id,
          tenantId: tenantId, // UUID predeterminado, puedes cambiarlo o pasarlo como parámetro
        }))
      );

      const categorias = await Categoria.bulkCreate(
        DATA.Categoria.map((item) => ({
          nombre: item.nombre,
          descripcion: item.descripcion,
          tenantId: tenantId, // UUID predeterminado, puedes cambiarlo o pasarlo como parámetro
        }))
      );

      const subcategorias = await SubCategoria.bulkCreate(
        DATA.SubCategoria.map((item) => ({
          nombre: item.nombre,
          descripcion: item.descripcion,
          CategoriaId: categorias[item.CategoriaId - 1].id,
          tenantId: tenantId,
        }))
      );

      await Producto.bulkCreate(
        DATA.Producto.map((item) => ({
          nombre: item.nombre,
          pn: item.pn,
          garantia_cliente: item.garantia_cliente,
          garantia_total: item.garantia_total,
          descripcion: item.descripcion,
          stock: item.stock,
          precio: item.precio,
          SubCategoriaId: subcategorias[item.SubCategoriaId - 1].id,
          CategoriaMarcaId: categoriamarcas[item.CategoriaMarcaId - 1].id,
          imagen_principal: item.imagen_principal,
          imageurl: item.imageurl,
          tenantId: tenantId, // UUID predeterminado, puedes cambiarlo o pasarlo como parámetro
        }))
      );
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new ExecuteSql();
