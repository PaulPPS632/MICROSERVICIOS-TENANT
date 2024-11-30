const { Router } = require("express");
const ProductoSerieController = require("../controllers/ProductoSerieController");

const ProductoSerieRoutes = new Router();

ProductoSerieRoutes.get(
  "/stock/:id",
  ProductoSerieController.getSeriesByProductoId
);
ProductoSerieRoutes.get("/belong/:sn", ProductoSerieController.getBelong);
ProductoSerieRoutes.post("/batch", ProductoSerieController.Batch);
ProductoSerieRoutes.post("/exist", ProductoSerieController.isExist);
ProductoSerieRoutes.post("/discount", ProductoSerieController.discount);

ProductoSerieRoutes.post("/", ProductoSerieController.create);

module.exports = ProductoSerieRoutes;
