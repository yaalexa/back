const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const usersRouter = require("./app/routers/usersRouter");
dotenv.config();
console.log("Servidor iniciando...");  // <-- Log para ver si el servidor arranca

const app = express();
app.use(express.json());

// Middleware para capturar errores globales
app.use((err, req, res, next) => {
    console.error("Error en el servidor:", err);
    res.status(500).json({ error: "Error interno del servidor" });
});

// Rutas

app.use("/api", (req, res) => {
  console.log("aquiiii")
});



sequelize.authenticate()
  .then(() => console.log("Conexión a MySQL establecida correctamente"))
  .catch(err => console.error("Error al conectar con MySQL:", err));
// Configuración del puerto
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
 