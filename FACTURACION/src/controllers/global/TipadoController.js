const TipoComprobante = require("../../models/correlative/TipoComprobante.js");
const TipoCondicion = require("../../models/global/TipoCondicion.js");
const TipoMoneda = require("../../models/global/TipoMoneda.js");
const TipoPago = require("../../models/global/TipoPago.js");

class TipadoController {
  async GetTipadoDocumentos(req, res) {
    try {
      const tipocomprobantes = await TipoComprobante.findAll();
      const tipocondiciones = await TipoCondicion.findAll();
      const tipopagos = await TipoPago.findAll();
      const tipomonedas = await TipoMoneda.findAll();
      const tipado = {
        tipocomprobantes,
        tipocondiciones,
        tipopagos,
        tipomonedas,
      };

      return res.status(200).json(tipado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new TipadoController();

/**
 * 
 *     public TipadoDocumentos get() {
        List<TipoComprobante> tipoComprobante = tipoComprobanteRepository.findAll();
        List<TipoCondicion> tipoCondicion = tipoCondicionRepository.findAll();
        List<TipoPago> tipoPago = tipoPagoRepository.findAll();
        List<TipoMoneda> tipoMoneda = tipoMonedaRepository.findAll();

        TipadoDocumentos nuevo = new TipadoDocumentos(tipoComprobante.stream().map(this::mapToTipoComprobanteResponse).toList(),tipoCondicion,tipoPago,tipoMoneda);
        return nuevo;
    }
    private TipoComprobanteResponse mapToTipoComprobanteResponse(TipoComprobante tipoComprobante) {
        return new TipoComprobanteResponse(tipoComprobante.getId(), tipoComprobante.getPrefijo(), tipoComprobante.getDescripcion());
    }
 */
