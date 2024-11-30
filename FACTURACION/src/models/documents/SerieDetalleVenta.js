const { Model, DataTypes } = require("sequelize");

class SerieDetalleVenta extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        DetalleVentaId: {
          type: DataTypes.UUID,
          references: {
            model: "DetalleVenta", // Nombre de la tabla
            key: "id",
          },
        },
        sn: {
          type: DataTypes.STRING,
        },
        ProductoSerieId: {
          type: DataTypes.UUID,
        },
        precio_neto: {
          type: DataTypes.DOUBLE,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "SeriesDetalleVenta",
      }
    );

    return this;
  }
}

module.exports = SerieDetalleVenta;
