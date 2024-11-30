const { config } = require("dotenv");
config();
const Sequelize = require("sequelize");
const { models } = require("../models/models.js");
class Database {
  constructor() {
    this.init();
  }

  init() {
    try {
      console.log("Conectando a la base de datos...");
      const name = process.env.DB_NAME;
      const user = process.env.DB_USER;
      const password = process.env.DB_PASSWORD;
      const host = process.env.DB_HOST;
      const port = process.env.DB_PORT;
      console.log("name: ", name);
      console.log("user: ", user);
      console.log("password: ", password);
      console.log("host: ", host);
      console.log("port: ", port);
      this.connection = new Sequelize(name, user, password, {
        host: host,
        port: port,
        dialect: "mysql",
        retry: {
          max: 10, // Número máximo de reintentos
          match: [
            /ETIMEDOUT/,
            /ECONNREFUSED/,
            /EHOSTUNREACH/,
            /EPIPE/,
            /ENOTFOUND/,
          ], // Tipos de errores que deben ser reintentados
        },
        pool: {
          max: 5,
          min: 0,
          acquire: 30000, // Tiempo máximo de espera para obtener una conexión en ms
          idle: 10000, // Tiempo de inactividad después del cual se libera una conexión
        },
      });
      Object.values(models).forEach((model) => model.init(this.connection));
      Object.values(models).forEach((model) => {
        if (typeof model.associate === "function") {
          model.associate(models);
        }
      });
      console.log("Conexión a la base de datos establecida exitosamente.");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  }
  configuration() {
    console.log("------------------");
    console.log("Configuration Database: ");
    console.log(this.connection);
    console.log("------------------");
  }
  async sync() {
    try {
      await this.connection.sync({ alter: false });
      console.log("Sincronización de modelos completada.");
    } catch (error) {
      console.error("Error al sincronizar los modelos:", error);
    }
  }
}

module.exports = new Database();
// prueba - smn10
// prueba - v2
