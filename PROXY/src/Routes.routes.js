const { Router } = require("express");
const DomainController = require("./controllers/DomainController");

const Routes = new Router();

Routes.get("/", DomainController.Redirect);
module.exports = Routes;
