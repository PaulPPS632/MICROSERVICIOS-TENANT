const { Router } = require("express");
const PaymentController = require("../controllers/PaymentController");
const PaymentRouter = Router();
PaymentRouter.get("/public-key", PaymentController.getPublickey);
PaymentRouter.post("/external-data", PaymentController.externarData);
PaymentRouter.post("/validate", PaymentController.validate);

module.exports = PaymentRouter;
