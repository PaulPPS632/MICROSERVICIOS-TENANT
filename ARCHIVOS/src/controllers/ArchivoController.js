const path = require("path");
const Archivo = require("../models/Archivo");
const GeneratePDF = require("../services/GeneratePDF");
const { Console } = require("console");

class ArchivoController {
  async Crear(req, res) {
    try {
      const prefijo = process.env.PREFIJO_URL;
      const tipoarchivo = req.body.tipo;
      const descripcion = req.body.descripcion;
      const { tenantid } = req.headers;
      const urls = [];
      let principal;
      console.log(req.files);
      if (req.files.file) {
        principal = await Archivo.create({
          url: `${prefijo}/${req.files.file[0].filename}`,
          nombre: req.files.file[0].filename,
          descripcion: descripcion,
          tipo_Archivo: tipoarchivo,
          ubicacion: req.files.file[0].destination,
          tenantId: tenantid,
        });
        urls.push(principal.url);
      }

      if (req.files) {
        const archivosCreados = await Promise.all(
          req.files.files.map(async (file) => {
            return await Archivo.create({
              url: `${prefijo}/${file.filename}`,
              descripcion: descripcion,
              nombre: file.originalname,
              tipo_Archivo: tipoarchivo,
              ubicacion: file.destination,
              tenantId: tenantid,
            });
          })
        );
        archivosCreados.forEach((archivo) => {
          urls.push(archivo.url);
        });
      }
      return res.status(201).json({
        urls,
      });
    } catch (error) {
      return res.status(500).json({ error: "Error en crear Imagenes", error });
    }
  }
  async Unitario(req, res) {
    try {
      const prefijo = process.env.PREFIJO_URL;
      const tipoarchivo = req.body.tipo;
      const descripcion = req.body.descripcion;
      const { tenantid } = req.headers;
      let principal;
      if (req.files.file) {
        principal = await Archivo.create({
          url: `${prefijo}/${req.files.file[0].filename}`,
          nombre: req.files.file[0].filename,
          descripcion: descripcion,
          tipo_Archivo: tipoarchivo,
          ubicacion: req.files.file[0].destination,
          tenantId: tenantid,
        });
      }
      return res.status(201).json({
        url: principal.url,
      });
    } catch (error) {
      return res.status(500).json({ error: "Error en crear Imagenes", error });
    }
  }
  async DeleteImagen(req, res) {
    try {
      const { urls } = req.body;
      console.log(urls);
      if (!Array.isArray(urls) || urls.length === 0) {
        return res.status(400).json({ message: "No se enviaron URLs válidas" });
      }

      const uploadsDir = path.resolve(__dirname, "../../public/uploads");
      console.log("uploadDir", uploadsDir);
      // Ejecutar todas las operaciones en paralelo
      const eliminaciones = urls.map(async (url) => {
        try {
          const archivo = await Archivo.findOne({ where: { url: url } });

          if (!archivo) {
            console.warn(`No se encontró archivo para URL: ${url}`);
            return { url, status: "no encontrado" };
          }

          const ruta = path.join(uploadsDir, archivo.nombre);

          // Verificar si el archivo existe
          await fs.access(ruta);

          // Eliminar el archivo del sistema
          await fs.unlink(ruta);

          // Eliminar registro de la base de datos
          await archivo.destroy();

          return { url, status: "eliminado" };
        } catch (error) {
          console.error(`Error al procesar URL: ${url}`, error);
          return { url, status: "error", error: error.message };
        }
      });

      const resultados = await Promise.all(eliminaciones);

      return res.status(200).json({
        message: "Proceso de eliminación completado",
        resultados,
      });
    } catch (error) {
      console.error("Error en DeleteImagen:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  }
  async getImagenesPublicitarias(req, res) {
    const { tipo } = req.body;
    const { tenantid } = req.headers;
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");
    console.log(tenantid);
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");
    const archivos = await Archivo.findAll({
      where: {
        tipo_Archivo: tipo ? tipo : "flyer_publicitaria",
        tenantId: tenantid,
      },
      order: [["descripcion", "ASC"]],
    });

    const respuesta = archivos.reduce((acc, archivo) => {
      const descripcion = archivo.descripcion || "Sin descripción";
      if (!acc[descripcion]) {
        acc[descripcion] = [];
      }
      acc[descripcion].push(archivo.url);
      return acc;
    }, {});
    return res.status(200).json(respuesta);
  }
  async CrearPdfCotizacion(req, res) {
    const datos = req.body;
    const ruta = GeneratePDF.createPdf(datos.datos);
    return res.status(200).json({ ruta });
  }
}

module.exports = new ArchivoController();
// const archivo = await Archivo.findOne({ where: { url: url } });

//       if (archivo) {
//         const uploadsDir = path.resolve(__dirname, "../public/uploads");
//         const ruta = `${uploadsDir}/${archivo.nombre}`;
//         await fs.access(ruta);
//         await fs.unlink(ruta);
//         await archivo.destroy();
//         return res.status(200).json({ message: "Imagen Eliminada con Exito" });
//       } else {
//         return res.status(404).json({ message: "Imagen no encontrada" });
//       }
