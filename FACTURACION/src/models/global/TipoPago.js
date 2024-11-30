const { Model, DataTypes } = require("sequelize");
class TipoPago extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING,
        },
        descripcion: {
          type: DataTypes.STRING,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "TipoPago",
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.Compra, {
      foreignKey: "TipoPagoId",
      sourceKey: "id",
    });
    models.Compra.belongsTo(this, {
      foreignKey: "TipoPagoId",
      targetKey: "id",
    });

    this.hasMany(models.Venta, {
      foreignKey: "TipoPagoId",
      sourceKey: "id",
    });
    models.Venta.belongsTo(this, {
      foreignKey: "TipoPagoId",
      targetKey: "id",
    });
  }
}

module.exports = TipoPago;
