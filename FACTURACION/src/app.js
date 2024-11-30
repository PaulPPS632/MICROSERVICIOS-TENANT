const express = require("express");
const cors = require("cors");
const CompraRoutes = require("./routes/documents/Compra.routes");
const VentaRoutes = require("./routes/documents/Venta.routes");
const CotizacionRoutes = require("./routes/documents/Cotizacion.routes");
const TipadoRoutes = require("./routes/global/Tipado.routes");
const ReportesRoutes = require("./routes/global/Reportes.routes");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }
  routes() {
    this.server.use("/compra", CompraRoutes);
    this.server.use("/venta", VentaRoutes);
    this.server.use("/cotizacion", CotizacionRoutes);
    this.server.use("/tipado", TipadoRoutes);
    this.server.use("/reportes", ReportesRoutes);
  }
}

module.exports = new App().server;
