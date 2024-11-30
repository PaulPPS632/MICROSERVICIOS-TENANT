const { Router } = require("express");
const Authorization = require("../../middlewares/Authorization.js");
const CompraController = require("../../controllers/documents/CompraController.js");

const CompraRoutes = new Router();

CompraRoutes.post("/", CompraController.Register);
CompraRoutes.get("/", CompraController.getPaged);
CompraRoutes.get("/:id", CompraController.getById);
module.exports = CompraRoutes;
