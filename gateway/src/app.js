const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios"); // Importar axios
const checkAuthentication = require("./middleware/auth");
const SERVICE_INVENTARIO_URL = "http://inventario:3001";
const SERVICE_FACTURACION_URL = "http://facturacion:3002";
const SERVICE_TENANT_URL = "http://tenant:3003";
const SERVICE_ARCHIVOS_URL = "http://archivos:3004";
class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }
  async handleRequest2(req, res, url) {
    try {
      const headers = { ...req.headers };
      delete headers["content-length"];
      if (
        headers["content-type"] &&
        headers["content-type"].includes("multipart/form-data")
      ) {
        const response = await axios({
          method: req.method,
          url: url,
          headers: headers,
          data: req,
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        });

        res.status(response.status).json(response.data);
      } else {
        // Manejar cualquier otro tipo de solicitud

        const response = await axios({
          method: req.method,
          url: url,
          data: req.body,
          headers: headers,
          responseType:
            req.url.endsWith(".jpg") ||
            req.url.endsWith(".jpeg") ||
            req.url.endsWith(".png") ||
            req.url.endsWith(".png") ||
            req.url.endsWith(".pdf") ||
            req.url.endsWith(".webp")
              ? "stream"
              : "json", // Detectar imágenes
        });
        if (response.headers["content-type"].includes("image")) {
          response.data.pipe(res); // Si es una imagen, devolver el stream
        } else {
          res.status(response.status).json(response.data);
        }
      }
    } catch (error) {
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({ error: "Internal server error", errord: error });
      }
    }
  }
  async handleRequest(req, res, url) {
    try {
      const headers = { ...req.headers };
      delete headers["content-length"];

      // Detectar el tipo de respuesta
      const responseType =
        req.url.endsWith(".jpg") ||
        req.url.endsWith(".jpeg") ||
        req.url.endsWith(".png") ||
        req.url.endsWith(".webp") ||
        req.url.endsWith(".pdf")
          ? "stream" // Usar stream para archivos
          : "json"; // JSON por defecto para otros casos

      // Realizar la solicitud al microservicio
      const response = await axios({
        method: req.method,
        url: url,
        data: req.body,
        headers: headers,
        responseType: responseType,
      });

      // Manejo de streams (archivos como PDFs, imágenes, etc.)
      if (responseType === "stream") {
        // Configurar el tipo de contenido y pasar el stream al cliente
        res.setHeader("Content-Type", response.headers["content-type"]);
        response.data.pipe(res);
      } else {
        // Manejar respuestas JSON normalmente
        res.status(response.status).json(response.data);
      }
    } catch (error) {
      if (error.response) {
        // Responder con el error del microservicio si existe
        res.status(error.response.status).json(error.response.data);
      } else {
        // Responder con error genérico en caso de fallo interno
        res
          .status(500)
          .json({ error: "Internal server error", details: error.message });
      }
    }
  }
  async handleRequestFORMDATA(req, res, url) {
    try {
      // Clonar los encabezados existentes y agregar tenantId
      const headers = { ...req.headers, tenantId: req.headers["tenantid"] };
      delete headers["content-length"]; // Axios calculará el tamaño automáticamente

      // Crear un stream de la solicitud original para reenviarlo
      const response = await axios({
        method: req.method,
        url: url,
        headers: headers,
        data: req, // Pasar la solicitud completa como stream
        responseType: req.url.match(/\.(jpg|jpeg|png|webp|pdf)$/i)
          ? "stream" // Usar stream para archivos
          : "json", // Respuesta JSON por defecto
        maxContentLength: Infinity, // Evitar restricciones de tamaño
        maxBodyLength: Infinity,
      });

      // Si la respuesta es un stream (archivos), configuramos los encabezados
      if (
        response.headers["content-type"].includes("application/pdf") ||
        response.headers["content-type"].includes("image")
      ) {
        res.setHeader("Content-Type", response.headers["content-type"]);
        response.data.pipe(res); // Enviar el stream directamente al cliente
      } else {
        res.status(response.status).json(response.data); // Respuesta JSON normal
      }
    } catch (error) {
      // Manejo de errores
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res
          .status(500)
          .json({ error: "Internal server error", details: error.message });
      }
    }
  }
  routes() {
    this.server.use("/api/archivos", (req, res) => {
      const url = `${SERVICE_ARCHIVOS_URL}${req.url}`;
      console.log(`method: ${req.method}, url: ${url}`);
      this.handleRequestFORMDATA(req, res, url);
    });

    this.server.use("/api/inventario", (req, res) => {
      const url = `${SERVICE_INVENTARIO_URL}${req.url}`;
      console.log(`method: ${req.method}, url: ${url}`);
      this.handleRequest2(req, res, url);
    });

    this.server.use("/api/facturacion", (req, res) => {
      const url = `${SERVICE_FACTURACION_URL}${req.url}`;
      console.log(`method: ${req.method}, url: ${url}`);
      this.handleRequest(req, res, url);
    });

    this.server.use("/api/tenant", (req, res) => {
      const url = `${SERVICE_TENANT_URL}${req.url}`;
      console.log(`method: ${req.method}, url: ${url}`);
      this.handleRequest2(req, res, url);
    });
  }
}

module.exports = new App().server;
// routes() {
//   // privadas y las publicas
//   this.server.use("/api/archivos", (req, res) => {
//     const url = `${SERVICE_ARCHIVOS_URL}${req.url}`;
//     req.pipe(request(url)).pipe(res);
//   });
//   this.server.use("/api/inventario", checkAuthentication, (req, res) => {
//     const url = `${SERVICE_INVENTARIO_URL}${req.url}`;
//     req.pipe(request(url)).pipe(res);
//   });
//   this.server.use("/api/facturacion", checkAuthentication, (req, res) => {
//     const url = `${SERVICE_FACTURACION_URL}${req.url}`;
//     req.pipe(request(url)).pipe(res);
//   });
//   this.server.use("/api/entidad", checkAuthentication, (req, res) => {
//     const url = `${SERVICE_ENTIDAD_URL}${req.url}`;
//     req.pipe(request(url)).pipe(res);
//   });
// }
