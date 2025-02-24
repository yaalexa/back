const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../services/usersService");
const SECRET_KEY = process.env.SECRET_KEY || "mi_secreto_super_seguro";
class UserController {
    static async obtenerUsuarios(req, res) {
        try {
            const users = await UserService.obtenerUser();
            res.json(users);
        } catch (e) {
            res.status(500).json({ error: "Error en la petición" });
        }
    }

    static async login(req, res) {
        try {
        const { correo, contrasena } = req.body;
        if (!correo || !contrasena) {
            return res.status(400).json({ error: "Faltan datos" });
        }
        const user = await UserService.obtenerUserPorCorreo(correo);
        if (!user) {
            return res.status(401).json({ error: "Usuario no encontrado" });
        }
        console.log("Usuario encontrado:", user);
        const contrasenaValida = await bcrypt.compare(contrasena, user.contrasena);
        if (!contrasenaValida) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        const token = jwt.sign({ id: user.id, correo: user.correo }, SECRET_KEY, { expiresIn: "1h" });
        console.log("Token generado:", token);

        res.json({ mensaje: "Login exitoso", token });

    } catch (e) {
        console.error("Error en login:", e); 
        res.status(500).json({ error: "Error en la petición" });
    }
}

    static async register(req, res) {
        try{
            const { nombre, correo, contrasena } = req.body;
            const hashedPassword = await bcrypt.hash(contrasena, 10);
            const user = await UserService.crearUsuarios(nombre, correo, hashedPassword);
            res.json(user);
        } catch (e) {
            res.status(500).json({ error: "Error en la petición" });
        }
    }

    static async eliminarUsuarios(req, res) {
        try {
            res.json({ msj: "eliminar" });
        } catch (e) {
            res.status(500).json({ msj: "error" });
        }
    }

    static async actualizarUsuarios(req, res) {
        try {
            res.json({ msj: "actualizar" });
        } catch (e) {
            res.status(500).json({ msj: "error" });
        }
    }
}

module.exports = UserController;
