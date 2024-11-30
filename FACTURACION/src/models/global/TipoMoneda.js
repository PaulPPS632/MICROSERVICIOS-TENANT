const { Model, DataTypes } = require("sequelize");

class TipoMoneda extends Model {
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
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "TipoMoneda",
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.Compra, {
      foreignKey: "TipoMonedaId",
      sourceKey: "id",
    });
    models.Compra.belongsTo(this, {
      foreignKey: "TipoMonedaId",
      targetKey: "id",
    });

    this.hasMany(models.Venta, {
      foreignKey: "TipoMonedaId",
      sourceKey: "id",
    });
    models.Venta.belongsTo(this, {
      foreignKey: "TipoMonedaId",
      targetKey: "id",
    });
  }
}

module.exports = TipoMoneda;
