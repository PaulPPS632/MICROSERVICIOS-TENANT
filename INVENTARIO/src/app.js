const express = require("express");
const cors = require("cors");
const CategoriaMarcaRouter = require("./routes/CategoriaMarca.routes");
const CategoriaRouter = require("./routes/Categoria.routes");
const MarcaRouter = require("./routes/Marca.routes");
const ProductoRouter = require("./routes/Producto.routes");
const ProductoSerieRoutes = require("./routes/ProductoSerie.routes");
const SubCategoriaRoutes = require("./routes/SubCategoria.routes");
const TenantRouter = require("./routes/Tenant.routes");
const PedidoRoutes = require("./routes/Pedido.routes");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use("*", (req, res, next) => {
      console.log(`method: ${req.method}, url: ${req.url}`);
      next();
    });
  }
  routes() {
    this.server.use("/categoria", CategoriaRouter);
    this.server.use("/categoriamarca", CategoriaMarcaRouter);
    this.server.use("/marca", MarcaRouter);
    this.server.use("/producto", ProductoRouter);
    this.server.use("/productoserie", ProductoSerieRoutes);
    this.server.use("/subcategoria", SubCategoriaRoutes);
    this.server.use("/tenant", TenantRouter);
    this.server.use("/pedidos", PedidoRoutes);
  }
}

module.exports = new App().server;
