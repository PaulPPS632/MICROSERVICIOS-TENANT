const { Model, DataTypes } = require("sequelize");

class Marca extends Model {
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
        tableName: "Marca",
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.CategoriaMarca, {
      foreignKey: "MarcaId",
      sourceKey: "id",
    });
    models.CategoriaMarca.belongsTo(this, {
      foreignKey: "MarcaId",
      targetKey: "id",
    });
  }
}

module.exports = Marca;
