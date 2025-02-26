const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const usersRouter=require('./routers/usersRouter')
const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin: "*", // Permitir cualquier origen (ajustar en producción)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
//ruta
app.use("/api", usersRouter);

//configuracion puerto
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("servidor corriendo");
})

