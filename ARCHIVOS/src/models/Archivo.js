const { Model, DataTypes } = require("sequelize");

class Archivo extends Model {
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
        namekey: {
          type: DataTypes.STRING,
        },
        bucketname: {
          type: DataTypes.STRING,
        },
        url: {
          type: DataTypes.STRING,
        },
        ubicacion: {
          type: DataTypes.STRING,
        },
        descripcion: {
          type: DataTypes.STRING,
        },
        tipo_Archivo: {
          type: DataTypes.STRING,
        },
        tenantId: {
          type: DataTypes.UUID,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "Archivo",
      }
    );

    return this;
  }
  static associate(models) {
    //realacion uno a muchos con producto, la foreign key en la tabla Producto es ArchivoPrincipalId
  }
}

module.exports = Archivo;
