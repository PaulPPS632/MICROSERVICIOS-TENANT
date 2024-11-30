const Pedidos = require("../models/Pedidos.js");

class PedidosController {
  async register(req, res) {
    try {
      const { ClienteId, productos, datospago, estado } = req.body;
      const { tenantid } = req.headers;
      const nuevoPedido = await Pedidos.create({
        fecha: new Date(),
        productos,
        datospago,
        estado,
        ClienteId: ClienteId,
        tenantId: tenantid,
      });
      return res.status(201).json(nuevoPedido);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Error al registrar el pedido", error });
    }
  }

  async getPedidos(req, res) {
    try {
      const { tenantid } = req.headers;
      if (!tenantid) {
        return res.status(400).json({ message: "Tenant ID is required" });
      }
      //const { userId } = req;
      const pedidos = await Pedidos.findAll({
        where: {
          // EntidadId: userId,
          tenantId: tenantid,
        },
        order: [["createdAt", "DESC"]],
      });
      const resp = pedidos.map((item) => ({
        id: item.id,
        fecha: item.fecha,
        productos: JSON.parse(item.productos),
        datospago: JSON.parse(item.datospago),
        estado: item.estado,
        createAt: item.createAt,
        updateAt: item.updateAt,
      }));
      return res.status(200).json(resp);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al obtener los pedidos", error });
    }
  }

  async changeEstado(req, res) {
    const { id, estado } = req.body;
    const { tenantid } = req.headers;
    await Pedidos.update(
      { estado: estado },
      { where: { id: id, tenantId: tenantid } }
    );
    return res.status(200).json({ message: "Estado Actualizado" });
  }
  async getPedidosByCliente(req, res) {
    try {
      const { tenantid } = req.headers;
      if (!tenantid) {
        return res.status(400).json({ message: "Tenant ID is required" });
      }
      console.log("TENANTID: ", req.headers);
      const { id } = req.params;
      console.log(id);
      const pedidos = await Pedidos.findAll({
        where: {
          ClienteId: id,
          tenantId: tenantid,
        },
      });
      const resp = pedidos.map((item) => ({
        id: item.id,
        fecha: item.fecha,
        productos: JSON.parse(item.productos),
        datospago: JSON.parse(item.datospago),
        estado: item.estado,
        createAt: item.createAt,
        updateAt: item.updateAt,
        Entidad: item.EntidadId,
      }));
      return res.status(200).json(resp);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al obtener los pedidos", error });
    }
  }
}

module.exports = new PedidosController();
