const Tenant = require("./Tenant.js");
const Entidad = require("./Entidad.js");
const TipoEntidad = require("./TipoEntidad.js");
const Rol = require("./Rol.js");
const Privilegio = require("./Privilegio.js");

const models = {
  Tenant,
  Entidad,
  TipoEntidad,
  Rol,
  Privilegio,
};

module.exports = { models };
