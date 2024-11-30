const { Model, DataTypes } = require("sequelize");

class SubCategoria extends Model {
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
        tenantId: {
          type: DataTypes.UUID,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "SubCategoria",
      }
    );

    return this;
  }
  static associate(models) {
    // Un Curso pertenece a un Usuario
    this.hasMany(models.Producto, {
      foreignKey: "SubCategoriaId",
      sourceKey: "id",
    });
    models.Producto.belongsTo(this, {
      foreignKey: "SubCategoriaId",
      targetKey: "id",
    });
  }
}

module.exports = SubCategoria;
