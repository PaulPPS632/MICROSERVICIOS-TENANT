const { Router } = require("express");
const ArchivoController = require("../../Controller/inventory/ArchivoController.js");
const Authorization = require("../../middlewares/Authorization.js");
const upload = require("../../middlewares/UploadImage.js");

const ArchivoRoutes = new Router();

ArchivoRoutes.post(
  "/",
  [Authorization, upload.fields([{ name: "files", maxCount: 5 }])],
  ArchivoController.Crear
);
ArchivoRoutes.delete("/", ArchivoController.DeleteImagen);
ArchivoRoutes.get("/publicitaria", ArchivoController.getImagenesPublicitarias);

module.exports = ArchivoRoutes;
