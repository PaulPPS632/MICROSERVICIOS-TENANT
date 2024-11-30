const { Router } = require("express");
const LoteService = require("../controllers/LoteService");

const LoteRouter = Router();

LoteRouter.get("", LoteService.GetAll);
LoteRouter.get("/:id", LoteService.GetById);
LoteRouter.post("", LoteService.Save);
LoteRouter.put("/:id", LoteService.Update);
LoteRouter.delete("/:id", LoteService.Delete);

module.exports = LoteRouter;
