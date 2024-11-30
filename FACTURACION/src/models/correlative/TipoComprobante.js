const { Model, DataTypes } = require("sequelize");

class TipoComprobante extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        prefijo: {
          type: DataTypes.STRING,
        },
        descripcion: {
          type: DataTypes.STRING,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "TipoComprobante",
      }
    );

    return this;
  }
  static associate(models) {
    //conceccion con Numeracion Comprobante
    this.hasMany(models.NumeracionComprobante, {
      foreignKey: "TipoComprobanteId",
      sourceKey: "id",
    });

    models.NumeracionComprobante.belongsTo(this, {
      foreignKey: "TipoComprobanteId",
      targetKey: "id",
    });
  }
}

module.exports = TipoComprobante;
