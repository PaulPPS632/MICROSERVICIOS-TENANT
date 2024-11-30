const { Model, DataTypes } = require("sequelize");

class DetalleCompra extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
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
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "DetalleCompra",
      }
    );

    return this;
  }
}

module.exports = DetalleCompra;
