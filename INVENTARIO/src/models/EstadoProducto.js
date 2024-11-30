const { Model, DataTypes } = require("sequelize");

class EstadoProducto extends Model {
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
        tenantId: {
          type: DataTypes.UUID,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "EstadoProducto",
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.ProductoSerie, {
      foreignKey: "EstadoProductoId",
      sourceKey: "id",
    });
    models.ProductoSerie.belongsTo(this, {
      foreignKey: "EstadoProductoId",
      targetKey: "id",
    });
  }
}

module.exports = EstadoProducto;
