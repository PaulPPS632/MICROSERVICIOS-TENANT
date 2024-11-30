const axios = require("axios");
const crypto = require("crypto");
const Tenant = require("../models/Tenant");

class PaymentController {
  async externarData(req, res) {
    const { tenantid } = req.headers;
    const body = req.body;
    const tenant = await Tenant.findOne({
      where: { id: tenantid },
      attributes: ["adicionales"],
    });
    if (tenant.adicionales == null)
      return res.status(400).json({ message: "El servicio esta inavilitado" });

    // const username = process.env.PAYMENT_USERNAME;
    // const password = process.env.PAYMENT_PASSWORD_TEST;
    const username = tenant.adicionales.username;
    const password = tenant.adicionales.password;
    const url = process.env.PAYMENT_URL;
    const encodeCredentials = (username, password) => {
      const auth = `${username}:${password}`;
      return Buffer.from(auth).toString("base64");
    };
    const encodedCredentials = encodeCredentials(username, password);
    try {
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      const formToken = response.data.answer.formToken;
      return res.status(200).json({ formToken });
    } catch (error) {
      console.error("Error posting external data", error);
      res.status(500).json({ error: "Failed to post external data" });
    }
  }
  async validate(req, res) {
    const { tenantid } = req.headers;
    const { clientAnswer, hash } = req.body;
    const tenant = await Tenant.findOne({
      where: { id: tenantid },
      attributes: ["adicionales"],
    });
    if (tenant.adicionales == null)
      return res.status(400).json({ message: "El servicio esta inavilitado" });

    // const paymentHash = process.env.PAYMENT_HASH_TEST;
    const paymentHash = tenant.adicionales.hash;
    let response = {};
    try {
      const answerJson = JSON.stringify(clientAnswer);
      const computeHash = crypto
        .createHmac("sha256", paymentHash)
        .update(answerJson)
        .digest("hex");
      if (hash == computeHash) {
        response = { Status: true };
      } else {
        response = { Status: false };
      }
      return res.status(200).json(response);
    } catch (error) {
      response.Status = false;
      console.error("Error validating payload", error);
      return res.status(500).json(response); // Handle any errors and return 500
    }
  }
  async ipn(req, res) {
    const { "kr-answer": krAnswer, "kr-hash": krHash } = req.body; // Extraer kr-answer y kr-hash del cuerpo de la solicitud
    const paymentHash = process.env.PAYMENT_HASH_TEST; // Obtener el payment_hash de las variables de entorno

    let response = {};

    try {
      // Convertir krAnswer a una cadena JSON
      const answerJson = JSON.stringify(krAnswer);

      // Calcular el hash HMAC SHA-256
      const computedHash = crypto
        .createHmac("sha256", paymentHash) // Crear HMAC usando SHA-256 y el payment_hash
        .update(answerJson) // Actualizar con el JSON del krAnswer
        .digest("hex"); // Obtener el hash en formato hexadecimal

      // Comparar el hash calculado con el kr-hash del payload
      if (krHash === computedHash) {
        response.Status = true;
        return res.status(200).json(response); // Retornar 200 OK con status true
      } else {
        response.Status = false;
        return res.status(500).json(response); // Retornar 500 con status false
      }
    } catch (error) {
      response.Status = false;
      console.error("Error en el IPN", error);
      return res.status(500).json(response); // Manejar cualquier error y retornar 500
    }
  }
  async getPublickey(req, res) {
    try {
      const { tenantid } = req.headers;
      if (!tenantid) {
        return res.status(400).json({ message: "Tenant ID es requerido" });
      }
      console.log("tenant: ", tenantid);
      const tenant = await Tenant.findOne({
        where: { id: tenantid },
        attributes: ["adicionales"],
      });
      console.log("tenantEncontrado: ", tenant);
      if (!tenant || !tenant.adicionales) {
        return res.status(400).json({
          message: "El servicio está inhabilitado o no existe el tenant",
        });
      }
      const publickey = tenant.adicionales.publickey;
      if (!publickey) {
        return res.status(404).json({
          message: "No se encontró una clave pública para este tenant",
        });
      }
      return res.status(200).json({ publickey });
    } catch (error) {
      console.error("Error obteniendo la clave pública:", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error obteniendo la clave pública" });
    }
  }
}

module.exports = new PaymentController();
