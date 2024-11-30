const { Router } = require("express");
const TenantController = require("../controllers/TenantController");

const TenantRouter = Router();
TenantRouter.post("/", TenantController.BulkData);

module.exports = TenantRouter;
