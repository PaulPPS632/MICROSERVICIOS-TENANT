const FormData = require("form-data");
const { default: axios } = require("axios");
async function uploadFilesToArchivosService(files, tenantid) {
  const formData = new FormData();

  // Agregar archivos al FormData
  if (files.file) {
    console.log(files.file[0].originalname);
    formData.append("file", files.file[0].buffer, files.file[0].originalname);
  }
  formData.append("tipo", "imagen_empresa");
  formData.append("descripcion", "logo");
  // Configurar encabezados para la solicitud con FormData
  const headers = { ...formData.getHeaders(), tenantid };

  try {
    // Enviar archivos al microservicio de ARCHIVO
    const response = await axios.post(
      process.env.SERVICE_ARCHIVOS_URL + "/unitario",
      formData,
      { headers }
    );
    return response.data.url; // Asume que el microservicio devuelve las URLs de las imágenes
  } catch (error) {
    console.error("Error al subir archivos:", error);
    throw error;
  }
}

module.exports = uploadFilesToArchivosService;
