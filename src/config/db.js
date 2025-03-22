import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const poolConfig = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  pool: poolConfig,
});

export default sequelize;
