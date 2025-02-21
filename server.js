const express = require("express");
const dotenv = require("dotenv");

const usersRouter = require("./app/routers/usersRouter");
dotenv.config();
console.log("Servidor iniciando...");  // <-- Log para ver si el servidor arranca

const app = express();
app.use(express.json());



app.get("/api", (req, res) => {
  res.json({ msj: "aqui" });
});


const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
 