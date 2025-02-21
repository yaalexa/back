const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const usersRouter = require("./app/routers/usersRouter");
dotenv.config();
const app = express();



app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Servidor funcionando en Vercel 🚀" });
});



const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
 