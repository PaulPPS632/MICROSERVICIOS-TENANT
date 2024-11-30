const { Model, DataTypes } = require("sequelize");

class TipoCondicion extends Model {
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
        diascredito: {
          type: DataTypes.INTEGER,
        },
        descripcion: {
          type: DataTypes.STRING,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "TipoCondicion",
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.Compra, {
      foreignKey: "TipoCondicionId",
      sourceKey: "id",
    });
    models.Compra.belongsTo(this, {
      foreignKey: "TipoCondicionId",
      targetKey: "id",
    });

    this.hasMany(models.Venta, {
      foreignKey: "TipoCondicionId",
      sourceKey: "id",
    });
    models.Venta.belongsTo(this, {
      foreignKey: "TipoCondicionId",
      targetKey: "id",
    });
  }
}

module.exports = TipoCondicion;
