const { Router } = require("express");
const PedidosController = require("../controllers/PedidosController");

const PedidoRoutes = new Router();

PedidoRoutes.post("/", PedidosController.register);
PedidoRoutes.get("/", PedidosController.getPedidos);
PedidoRoutes.get("/:id", PedidosController.getPedidosByCliente);
PedidoRoutes.put("/", PedidosController.changeEstado);
module.exports = PedidoRoutes;
