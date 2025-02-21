const express = require("express");
const dotenv = require("dotenv");

dotenv.config();


const app = express();
app.use(express.json());



// Rutas
const usersRouter = require("./routers/usersRouter");
app.use("/api", usersRouter);

// Configuración del puerto
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
 