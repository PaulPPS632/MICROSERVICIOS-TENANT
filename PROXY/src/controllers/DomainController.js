const Tenant = require("../models/global/Tenant");

class TipadoController {
  async Redirect(req, res) {
    console.log(req.headers.host);
    console.log(req.hostname);
    const tenant = await Tenant.findOne({
      where: {
        dominio: req.headers.host,
      },
    });
    res.setHeader("TenantId", tenant.id);
    if (tenant) {
      //res.redirect(`http://${tenant.dominiofront}`);
      const tenantDirectory = path.join("/var/www", tenant.dominiofront);
      res.sendFile(path.join(tenantDirectory, "index.html"), (err) => {
        if (err) {
          console.error("Error al servir el archivo:", err);
          res.status(500).send("Error al cargar la página");
        }
      });
    } else {
      res.status(404).json({
        message: "No se encontro el dominio",
      });
    }
  }
}

module.exports = new TipadoController();
