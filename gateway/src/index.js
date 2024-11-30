const app = require("./app.js");
async function main() {
  try {
    const puerto = process.env.PUERTO || 3000;
    app.listen(puerto, () => {
      console.log(`Servidor corriendo en el puerto ${puerto}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
