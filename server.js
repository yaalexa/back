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
app.use((req, res, next) => {
    console.log(`📢 [${req.method}] ${req.url} - Body:`, req.body);
    next();
});


// Middleware de manejo de errores global
app.use((err, req, res, next) => {
    console.error("❌ Error en la solicitud:", err);
    res.status(500).json({ error: "Error interno del servidor" });
});

// Configuración del puerto
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

