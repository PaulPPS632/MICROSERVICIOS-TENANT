const Correlativo = require("./correlative/Correlativo.js");
const NumeracionComprobante = require("./correlative/NumeracionComprobante.js");
const TipoComprobante = require("./correlative/TipoComprobante.js");

const Compra = require("./documents/Compra.js");
const DetalleCompra = require("./documents/DetalleCompra.js");
const Venta = require("./documents/Venta.js");
const DetalleVenta = require("./documents/DetalleVenta.js");

const TipoCondicion = require("./global/TipoCondicion.js");
const TipoMoneda = require("./global/TipoMoneda.js");
const TipoPago = require("./global/TipoPago.js");

const SerieDetalleVenta = require("./documents/SerieDetalleVenta.js");
const Cotizacion = require("./documents/Cotizacion.js");
const DetalleCotizacion = require("./documents/DetalleCotizacion.js");
const SerieDetalleCotizacion = require("./documents/SerieDetalleCotazacion.js");

const models = {
  Correlativo,
  NumeracionComprobante,
  TipoComprobante,
  SerieDetalleVenta,
  Compra,
  DetalleCompra,
  Venta,
  DetalleVenta,
  Cotizacion,
  DetalleCotizacion,
  SerieDetalleCotizacion,
  TipoCondicion,
  TipoMoneda,
  TipoPago,
};

/*
Object.values(models).forEach((model) => {
  if (typeof model.associate === "function") {
    model.associate(models);
  }
});*/

module.exports = { models };
