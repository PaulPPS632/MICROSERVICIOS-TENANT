const express = require("express");
const path = require("path");
const Tenant = require("./models/Tenant");
class App {
  constructor() {
    this.server = express();
    this.domainCache = new Map();
    this.routes();
  }
  // Cargar dominios en el caché al iniciar la aplicación
  async loadDomainCache() {
    try {
      const tenants = await Tenant.findAll({
        attributes: ["dominio", "dominiofront"],
      });
      tenants.forEach((tenant) => {
        console.log(tenant.dominio, tenant.dominiofront);
        this.domainCache.set(tenant.dominio, tenant.dominiofront);
      });
      console.log("Caché de dominios cargado correctamente");
      console.log(this.domainCache);
    } catch (error) {
      console.error("Error al cargar el caché de dominios:", error);
    }
  }
  async updateDomainCache() {
    this.domainCache.clear();
    await this.loadDomainCache();
  }
  routes() {
    // Ruta para servir index.html y otros archivos estáticos
    this.server.get("/realoadproxy", (req, res) => {
      this.updateDomainCache();
      res.status(200).json({ status: "Service is healthy" });
    });
    this.server.get("*", async (req, res) => {
      try {
        const host = req.headers.host;

        const tenantPath = this.domainCache.get(host);
        if (tenantPath) {
          //const tenantDirectory = path.join("../web", tenantPath);
          const tenantDirectory = path.resolve(
            __dirname,
            `../web/${tenantPath}`
          );
          // Configura el middleware para servir archivos estáticos solo para el tenant actual
          express.static(tenantDirectory)(req, res, (err) => {
            if (err) {
              console.error("Error al servir archivo estático:", err);
              res.status(500).send("Error al cargar el recurso estático");
            } else if (req.url === "/" || req.accepts("html")) {
              // Si es una solicitud para la raíz o una solicitud de HTML, devuelve index.html
              res.sendFile(path.join(tenantDirectory, "index.html"));
            } else {
              next(); // Pasa al siguiente middleware si no es un archivo estático
            }
          });
        } else {
          res
            .status(404)
            .json({ message: "No se encontró la web para el dominio" });
        }
      } catch (error) {
        console.error("Error al servir el archivo:", error);
        res.status(500).send("Error al cargar la página");
      }
    });
  }
}

module.exports = App;
