const { Router } = require("express");
const upload = require("../middlewares/UploadImage.js");
const Authorization = require("../middlewares/Authorization.js");
const ArchivoController = require("../controllers/ArchivoController.js");

const ArchivoRoutes = new Router();
ArchivoRoutes.post("/pdf-cotizacion", ArchivoController.CrearPdfCotizacion);
ArchivoRoutes.post(
  "/unitario",
  upload.fields([{ name: "file", maxCount: 1 }]),
  ArchivoController.Unitario
);
ArchivoRoutes.post(
  "/publicitaria",
  upload.fields([{ name: "files", maxCount: 5 }]),
  ArchivoController.Crear
);
ArchivoRoutes.post(
  "/",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "files", maxCount: 5 },
  ]),
  ArchivoController.Crear
);

ArchivoRoutes.delete("/", ArchivoController.DeleteImagen);
ArchivoRoutes.get("/publicitaria", ArchivoController.getImagenesPublicitarias);

module.exports = ArchivoRoutes;
