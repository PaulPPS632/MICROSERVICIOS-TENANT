const { Router } = require("express");
const EntidadController = require("../controllers/EntidadController.js");

const EntidadRouter = Router();

// Add routes
EntidadRouter.get("/", EntidadController.getAll);
EntidadRouter.post("/", EntidadController.create);
EntidadRouter.get("/dashboard", EntidadController.getAllDashboard);
EntidadRouter.put("/asignarrol", EntidadController.UpdateRol);
EntidadRouter.post("/login", EntidadController.login);
EntidadRouter.post("/register", EntidadController.createSubcription);
EntidadRouter.post("/private", EntidadController.create);
EntidadRouter.post("/validate", EntidadController.validate);
EntidadRouter.post("/batch", EntidadController.Batch);
EntidadRouter.post(
  "/register-new-tenant",
  //ValidateHashCreateTenant,
  EntidadController.createNewTenant
);
EntidadRouter.get("/PRUEBA", EntidadController.executePrueba);
EntidadRouter.get("/search", EntidadController.Search);
module.exports = EntidadRouter;
