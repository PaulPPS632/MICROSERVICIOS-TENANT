const { default: axios } = require("axios");
const Rol = require("../models/Rol");
const Tenant = require("../models/Tenant");
const jwt = require("jsonwebtoken");
const Entidad = require("../models/Entidad");
const uploadFilesToArchivosService = require("../services/uploadFiles");
class TenantController {
  async create(req, res) {
    try {
      const { usuario, tenant } = req.body;
      const newTenant = await Tenant.create({
        nombre: tenant.nombre,
        tiponegocio: tenant.tiponegocio,
        ruc: tenant.ruc,
        clavesol: tenant.clavesol,
        paleta: tenant.paleta,
        claveCertificado: tenant.claveCertificado,
        dominio: tenant.dominio,
        dominiofront: tenant.dominiofront,
      });
      const ROL = await Rol.findOne({ where: { id: usuario.RolId } });
      if (!ROL) return res.status(400).json({ message: "Rol no valido" });
      const newentidad = await Entidad.create({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        documento: usuario.documento,
        direccion: usuario.direccion,
        telefono: usuario.telefono,
        email: usuario.email,
        password: usuario.password,
        TipoEntidadId: 1,
        RolId: ROL.id,
        TenantId: newTenant.id,
      });
      const resVolcadura = await axios.post(
        `${process.env.SERVICE_INVENTARIO_URL}/tenant`,
        {
          tiponegocio: tenant.tiponegocio,
          tenantId: newTenant.id,
        }
      );
      let token = "";
      if (resVolcadura.data.status) {
        token = jwt.sign({ id: newentidad.id }, process.env.SECRET_KEY, {
          expiresIn: 86400,
        });
      }
      return res.status(200).json({
        message: resVolcadura.data.status
          ? "registrado existosamente"
          : "Fallo",
        status: resVolcadura.data.status,
        token,
        usuario: newentidad,
        rol: ROL,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async create2(req, res) {
    try {
      const { datos } = req.body;
      const { usuario, tenant } = JSON.parse(datos);

      const newTenant = await Tenant.create({
        nombre: tenant.nombre,
        tiponegocio: tenant.tiponegocio,
        ruc: tenant.ruc,
        clavesol: tenant.clavesol,
        paleta: tenant.paleta,
        claveCertificado: tenant.claveCertificado,
        dominio: tenant.dominio,
        dominiofront: tenant.dominiofront,
      });
      const url = await uploadFilesToArchivosService(req.files, newTenant.id);
      newTenant.update({
        urllogo: url,
      });
      const ROL = await Rol.findOne({ where: { id: usuario.RolId } });
      if (!ROL) return res.status(400).json({ message: "Rol no valido" });
      const newentidad = await Entidad.create({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        documento: usuario.documento,
        direccion: usuario.direccion,
        telefono: usuario.telefono,
        email: usuario.email,
        password: usuario.password,
        TipoEntidadId: 1,
        RolId: ROL.id,
        TenantId: newTenant.id,
      });
      const resVolcadura = await axios.post(
        `${process.env.SERVICE_INVENTARIO_URL}/tenant`,
        {
          tiponegocio: tenant.tiponegocio,
          tenantId: newTenant.id,
        }
      );
      let token = "";
      if (resVolcadura.data.status) {
        token = jwt.sign({ id: newentidad.id }, process.env.SECRET_KEY, {
          expiresIn: 86400,
        });
      }

      const data = await axios.get(
        `${process.env.SERVICE_PROXY_URL}/realoadproxy`
      );
      console.log(data.data);
      return res.status(200).json({
        message: resVolcadura.data.status
          ? "registrado existosamente"
          : "Fallo",
        status: resVolcadura.data.status,
        token,
        usuario: newentidad,
        rol: ROL,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async GetByDomain(req, res) {
    const { dominio } = req.params;
    const tenant = await Tenant.findOne({
      where: { dominio },
      attributes: [
        "id",
        "nombre",
        "tiponegocio",
        "dominio",
        "dominiofront",
        "urllogo",
      ],
    });
    if (!tenant) return res.status(400).json({ message: "Dominio no valido" });
    return res.status(200).json(tenant);
  }
  async Pasarela(req, res) {
    try {
      const { tenantid } = req.headers;
      const adicionales = req.body;
      if (!tenantid) {
        return res.status(400).json({ message: "El tenantid es obligatorio." });
      }
      if (!adicionales || typeof adicionales !== "object") {
        return res.status(400).json({
          message:
            "Los datos adicionales son obligatorios y deben ser un objeto.",
        });
      }
      const [updatedRows] = await Tenant.update(
        { adicionales: adicionales },
        { where: { id: tenantid } }
      );
      if (updatedRows === 0) {
        return res.status(404).json({
          message: "No se encontró un tenant con el ID proporcionado.",
        });
      }
      return res
        .status(200)
        .json({ message: "Pasarela Actualizada Exitosamente" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new TenantController();
