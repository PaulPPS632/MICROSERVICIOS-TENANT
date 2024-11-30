const CategoriaMarca = require("../models/CategoriaMarca");

class CategoriaMarcaService {
  async Save(req, res) {
    const { nombre, id_marca } = req.body;
    const { tenantid } = req.headers;
    if (id_marca == null || id_marca == undefined || id_marca == "") {
      res.status(400).json({ message: "id invalido" });
    }
    if (nombre == null || nombre == undefined || nombre == "") {
      res.status(400).json({ message: "nombre invalido" });
    }
    try {
      await CategoriaMarca.create({
        nombre,
        MarcaId: id_marca,
        tenantId: tenantid,
      });
      res.status(201).json({ message: "Registro guardado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = new CategoriaMarcaService();
