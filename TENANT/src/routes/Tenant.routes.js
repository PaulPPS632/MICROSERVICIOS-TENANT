const { Router } = require("express");
const TenantController = require("../controllers/TenantController");
const multer = require("multer");
const upload = multer();
const TenantRouter = Router();
TenantRouter.post(
  "/2",
  upload.fields([{ name: "file", maxCount: 1 }]),
  TenantController.create2
);
TenantRouter.post("/", TenantController.create);

TenantRouter.get("/:dominio", TenantController.GetByDomain);
TenantRouter.post("/pasarela", TenantController.Pasarela);
module.exports = TenantRouter;
