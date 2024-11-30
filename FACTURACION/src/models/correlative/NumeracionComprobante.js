const { Model, DataTypes } = require("sequelize");

class NumeracionComprobante extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        numeracion: {
          type: DataTypes.BIGINT,
        },
        descripcion: {
          type: DataTypes.STRING,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "NumeracionComprobante",
      }
    );

    return this;
  }
  static associate(models) {
    //coneccion con tipocomprobante
    //coneccion con correlativo
    this.hasMany(models.Correlativo, {
      foreignKey: "NumeracionComprobanteId",
      sourceKey: "id",
    });
    models.Correlativo.belongsTo(this, {
      foreignKey: "NumeracionComprobanteId",
      targetKey: "id",
    });
  }
}

module.exports = NumeracionComprobante;
