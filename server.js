const express = require("express");
const dotenv = require("dotenv");
const usersRouter = require("./routers/usersRouter");
dotenv.config();

const app = express();
app.use(express.json());

const cors = require("cors");
const allowedOrigins = [
    'http://localhost:5173',
];

// Configurar CORS
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS not allowed'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());


// Importar rutas

app.use("/api", usersRouter);

// Middleware para manejar errores y evitar 500 en OPTIONS
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});

// Configuración del puerto
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

