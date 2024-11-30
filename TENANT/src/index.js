const app = require("./app.js");
const Database = require("./databases/database.js");
async function main() {
  try {
    await Database.sync();
    const puerto = process.env.PUERTO || 3003;
    app.listen(puerto, () => {
      console.log(`Servidor corriendo en el puerto ${puerto}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
