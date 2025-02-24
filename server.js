const express = require("express");
const dotenv = require("dotenv");
const usersRouter = require("./routers/usersRouter");
dotenv.config();

const app = express();
app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173", // Permitir el frontend local
    credentials: true, // Permite enviar cookies y encabezados de autenticación
  })
);

app.use("/api", usersRouter);

// Configuración del puerto
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

