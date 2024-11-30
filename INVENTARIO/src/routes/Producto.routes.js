const { Router } = require("express");
const ProductoController = require("../controllers/ProductoController");
const Authorization = require("../middlewares/Authorization");
const multer = require("multer");
const upload = multer();
const ProductoRouter = new Router();

// ProductoRouter.get("/", Authorization, ProductoController.getAll);
ProductoRouter.get("/", ProductoController.getAll);
ProductoRouter.get("/fact", ProductoController.GetProductsFact);
ProductoRouter.get(
  "/CategoriaProducto",
  ProductoController.GetCategoriaProducto
);
ProductoRouter.get("/paged", ProductoController.GetPaged);
ProductoRouter.get("/paged2", ProductoController.GetPaged2);
// ProductoRouter.post("/", Authorization, ProductoController.Create);
ProductoRouter.get("/search", ProductoController.SearchProducto);

ProductoRouter.post(
  "/",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "files", maxCount: 10 },
  ]),
  ProductoController.Create
);
ProductoRouter.post("/exist", ProductoController.isExist);
ProductoRouter.put(
  "/",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "files", maxCount: 10 },
  ]),
  ProductoController.Update
);
ProductoRouter.get("/:id", ProductoController.getById);

module.exports = ProductoRouter;
