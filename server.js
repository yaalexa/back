const express = require("express");
const dotenv = require("dotenv");
const usersRouter = require("./routers/usersRouter");
dotenv.config();

const app = express();
app.use(express.json());

const cors = require("cors");

app.use("/api", usersRouter);

// Configuración del puerto
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

