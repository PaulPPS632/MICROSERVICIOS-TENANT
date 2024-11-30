const express = require("express");
const cors = require("cors");
const path = require("path");
const EntidadRouter = require("./routes/Entidad.routes");
const TenantRouter = require("./routes/Tenant.routes");
const PaymentRouter = require("./routes/Payment.routes");
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
    this.server.use("/entidad", EntidadRouter);
    this.server.use("/tenant", TenantRouter);
    this.server.use("/payment", PaymentRouter);
    this.server.get("/alive", (req, res) => {
      res.status(200).json({ status: "Service is healthy" });
    });
  }
}
module.exports = new App().server;
