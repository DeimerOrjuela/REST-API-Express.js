import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./config/db.js";
import bebidasRoutes from "../src/routes/bebidasRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", bebidasRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion exitosa");

    await sequelize.sync();
    console.log("Modelos sincronizados");

    app.listen(PORT, () => {
      console.log(`Servidr corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.log("Error al iniciar el servidor", error);
  }
};

startServer();
