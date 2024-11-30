const { Router } = require("express");
const CategoriaMarcaService = require("../controllers/CategoriaMarcaService");
const Authorization = require("../middlewares/Authorization");

const CategoriaMarcaRouter = Router();

CategoriaMarcaRouter.post("/", Authorization, CategoriaMarcaService.Save);
module.exports = CategoriaMarcaRouter;
