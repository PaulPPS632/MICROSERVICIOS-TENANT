const App = require("./app.js");
const Database = require("./databases/database.js");
async function main() {
  try {
    await Database.sync();
    // Inicializa la aplicación después de que la base de datos esté lista
    const app = new App(); // crea una nueva instancia de la aplicación
    await app.loadDomainCache();
    const puerto = process.env.PUERTO;
    app.server.listen(puerto, () => {
      console.log(`Servidor corriendo en el puerto ${puerto}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
