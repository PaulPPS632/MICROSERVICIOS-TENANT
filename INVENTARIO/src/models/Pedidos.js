const { Model, DataTypes } = require("sequelize");

class Pedidos extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        fecha: {
          type: DataTypes.DATE,
        },
        productos: {
          type: DataTypes.JSON, //aqui se guarda un json
        },
        datospago: {
          type: DataTypes.JSON, //json de datos de izipay
        },
        estado: {
          type: DataTypes.STRING,
        },
        ClienteId: {
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
        tableName: "Pedidos",
      }
    );

    return this;
  }
}

module.exports = Pedidos;
