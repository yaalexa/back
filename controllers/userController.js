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
        
}

    static async register(req, res) {
        try {
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
