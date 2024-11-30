const { Execute } = require("../services/ExecuteSQL");

class TenantController {
  async BulkData(req, res) {
    try {
      const { tiponegocio, tenantId } = req.body;
      const status = await Execute(tiponegocio, tenantId);
      if (status) {
        return res
          .status(200)
          .json({ status: status, message: "Datos volcados correctamente" });
      } else {
        return res
          .status(500)
          .json({ status: status, message: "Error al volcar los datos" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new TenantController();
