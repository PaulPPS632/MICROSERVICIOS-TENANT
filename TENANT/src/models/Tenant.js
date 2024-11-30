const { Model, DataTypes } = require("sequelize");

class Tenant extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING,
        },
        tiponegocio: {
          type: DataTypes.STRING,
        },
        ruc: {
          type: DataTypes.STRING,
        },
        clavesol: {
          type: DataTypes.STRING,
        },
        paleta: {
          type: DataTypes.STRING,
        },
        adicionales: {
          type: DataTypes.JSON,
        },
        ubigeo: {
          type: DataTypes.STRING,
        },
        urllogo: {
          type: DataTypes.STRING,
        },
        claveCertificado: {
          type: DataTypes.STRING,
        },
        dominio: {
          type: DataTypes.STRING,
        },
        dominiofront: {
          type: DataTypes.STRING,
        },
      }, // attributes
      {
        sequelize,
        timestamps: true,
        tableName: "Tenant",
      }
    );

    return this;
  }
  static associate(models) {
    //realacion uno a muchos con producto, la foreign key en la tabla Producto es ArchivoPrincipalId
    this.hasMany(models.Entidad, {
      foreignKey: {
        name: "TenantId",
        type: DataTypes.UUID,
      },
      sourceKey: "id",
    });
    models.Entidad.belongsTo(this, {
      foreignKey: {
        name: "TenantId",
        type: DataTypes.UUID,
      },
      targetKey: "id",
    });
  }
}

module.exports = Tenant;
