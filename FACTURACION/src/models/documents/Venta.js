const { Model, DataTypes } = require("sequelize");

class Venta extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        documento: {
          type: DataTypes.STRING,
        },
        fecha_emision: {
          type: DataTypes.DATE,
        },
        fecha_vencimiento: {
          type: DataTypes.DATE,
        },
        nota: {
          type: DataTypes.STRING,
        },
        gravada: {
          type: DataTypes.DOUBLE,
        },
        impuesto: {
          type: DataTypes.DOUBLE,
        },
        total: {
          type: DataTypes.DOUBLE,
        },
        fecha_pago: {
          type: DataTypes.DATE,
        },
        formapago: {
          type: DataTypes.STRING,
        },
        url_pdf: {
          type: DataTypes.STRING,
        },
        tipo_cambio: {
          type: DataTypes.DOUBLE,
        },
        EntidadNegocioId: {
          type: DataTypes.UUID,
        },
        EntidadId: {
          type: DataTypes.UUID,
        },
        tenantId: {
          type: DataTypes.UUID,
        },
      }, // attributes
      {
        sequelize,
        timestamps: true,
        tableName: "Venta",
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.DetalleVenta, {
      foreignKey: "VentaId",
      sourceKey: "id",
      as: "detalleventa",
    });
    models.DetalleVenta.belongsTo(this, {
      foreignKey: "VentaId",
      targetKey: "id",
      as: "detalleventa",
    });
  }
}

module.exports = Venta;
