import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Bebidas = sequelize.define(
  "Bebidas",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    sabor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "bebidas",
  }
);

export default Bebidas;
