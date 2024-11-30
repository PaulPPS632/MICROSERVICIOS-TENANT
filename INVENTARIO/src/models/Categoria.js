const { Model, DataTypes } = require("sequelize");

class Categoria extends Model {
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
        tableName: "Categoria",
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.SubCategoria, {
      foreignKey: "CategoriaId",
      sourceKey: "id",
    });
    models.SubCategoria.belongsTo(this, {
      foreignKey: "CategoriaId",
      targetKey: "id",
    });
  }
}

module.exports = Categoria;
