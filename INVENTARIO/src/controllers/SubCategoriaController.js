const SubCategoria = require("../models/SubCategoria");

class SubCategoriaController {
  async save(req, res) {
    const { nombre, descripcion, id_categoria } = req.body;
    const { tenantid } = req.headers;
    if (
      id_categoria == null ||
      id_categoria == undefined ||
      id_categoria == ""
    ) {
      res.status(400).json({ message: "id invalido" });
    }
    if (nombre == null || nombre == undefined || nombre == "") {
      res.status(400).json({ message: "nombre invalido" });
    }
    if (descripcion == null || descripcion == undefined || descripcion == "") {
      res.status(400).json({ message: "descripcion invalido" });
    }
    try {
      await SubCategoria.create({
        nombre,
        descripcion,
        CategoriaId: id_categoria,
        tenantId: tenantid,
      });
      res.status(200).json({ message: "SubCategoria guardada correctamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    return res.json();
  }
}

module.exports = new SubCategoriaController();
