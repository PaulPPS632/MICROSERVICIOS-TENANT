const app = require("./app.js");
const { database } = require("./databases/database.js");

async function main() {
  try {
    const puerto = process.env.PUERTO || 3000;
    await database.sync();
    app.listen(puerto, () => {
      console.log(`Servidor corriendo en el puerto ${puerto}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
