const express = require("express");
const dotenv = require("dotenv");
const usersRouter = require("./routers/usersRouter");

dotenv.config();
const app = express();

const cors = require("cors");
const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
    origin: '*',  // 👈 Agrega explícitamente localhost
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // 👈 Importante para autenticación
}));

app.use(express.json()); // 👈 Solo aquí

app.use("/api", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});

