const express = require("express");
const cors = require("cors");
const path = require("path");
const ArchivoRoutes = require("./routes/Archivo.routes");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    const uploadsDir = path.resolve(__dirname, "../public/uploads");
    const documentsDir = path.resolve(
      __dirname,
      "../public/documents/cotizaciones"
    );
    this.server.use("/uploads", (req, res, next) => {
      console.log("Solicitud de archivo:", req.url);
      console.log("uploadsDir", uploadsDir);
      next();
    });

    this.server.use("/uploads", express.static(uploadsDir));
    this.server.use("/cotizaciones", (req, res, next) => {
      console.log("Solicitud de archivo:", req.url);
      console.log("documentsDir", documentsDir);
      next();
    });
    this.server.use("/cotizaciones", express.static(documentsDir));
  }
  routes() {
    this.server.use("/", ArchivoRoutes);
    this.server.get("/alive", (req, res) => {
      res.status(200).json({ status: "Service is healthy" });
    });
  }
}

module.exports = new App().server;
