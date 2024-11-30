const { Router } = require("express");
const Authorization = require("../middlewares/Authorization");
const SubCategoriaController = require("../controllers/SubCategoriaController");
const SubCategoriaRoutes = Router();

SubCategoriaRoutes.post("", Authorization, SubCategoriaController.save);

module.exports = SubCategoriaRoutes;
