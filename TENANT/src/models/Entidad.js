const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
class Entidad extends Model {
  static init(sequelize) {
    super.init(
      {
        // attributes
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING,
        },
        apellido: {
          type: DataTypes.STRING,
        },
        documento: {
          type: DataTypes.STRING,
        },
        direccion: {
          type: DataTypes.STRING,
        },
        telefono: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        verifiedWebsite: {
          type: DataTypes.BOOLEAN,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "Entidad",
        hooks: {
          beforeCreate: async (Entidad, options) => {
            if (Entidad.password != null) {
              const salt = await bcrypt.genSalt(10);
              Entidad.password = await bcrypt.hash(Entidad.password, salt);
            }
          },
          beforeUpdate: async (Entidad, options) => {
            if (Entidad.changed("password") && Entidad.password != null) {
              const salt = await bcrypt.genSalt(10);
              Entidad.password = await bcrypt.hash(Entidad.password, salt);
            }
          },
        },
      }
    );

    return this;
  }
  static associate(models) {}
  static async comparePassword(password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
  }
}

module.exports = Entidad;
