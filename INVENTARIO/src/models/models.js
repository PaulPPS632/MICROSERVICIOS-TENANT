const Categoria = require("./Categoria.js");
const CategoriaMarca = require("./CategoriaMarca.js");
const EstadoProducto = require("./EstadoProducto.js");
const Marca = require("./Marca.js");
const Pedidos = require("./Pedidos.js");
const Producto = require("./Producto.js");
const ProductoSerie = require("./ProductoSerie.js");
const SubCategoria = require("./SubCategoria.js");

const models = {
  Categoria,
  CategoriaMarca,
  EstadoProducto,
  Marca,
  Pedidos,
  Producto,
  ProductoSerie,
  SubCategoria,
};

module.exports = { models };
