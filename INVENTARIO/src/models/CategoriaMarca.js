const { Model, DataTypes } = require("sequelize");

class CategoriaMarca extends Model {
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
        tableName: "CategoriaMarca",
      }
    );

    return this;
  }
  static associate(models) {
    //coneccion con Marca muchos a uno (se encuentra realcion en obj Marca)
    //conecccion con producto uno a muchos
    this.hasMany(models.Producto, {
      foreignKey: "CategoriaMarcaId",
      sourceKey: "id",
    });
    models.Producto.belongsTo(this, {
      foreignKey: "CategoriaMarcaId",
      targetKey: "id",
    });
  }
}

module.exports = CategoriaMarca;
