const { Router } = require("express");
const MarcaController = require("../controllers/MarcaController");

const MarcaRouter = Router();

MarcaRouter.get("", MarcaController.GetAll);
MarcaRouter.get("/paged", MarcaController.GetAllPaged);
MarcaRouter.get("/:id", MarcaController.GetById);
MarcaRouter.post("", MarcaController.Save);
MarcaRouter.post("/saves", MarcaController.SavesAll);
MarcaRouter.put("/:id", MarcaController.Update);
MarcaRouter.get("/subs/:id", MarcaController.Belongs);
MarcaRouter.delete("/:id", MarcaController.Delete);

module.exports = MarcaRouter;
