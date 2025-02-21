const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../services/usersService");

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
            const user = await UserService.obtenerUserPorCorreo(correo);
            
            if (!user) {
                return res.status(401).json({ error: "Credenciales incorrectas" });
            }
            
            const contrasenaValida = await bcrypt.compare(contrasena, user.contrasena);
            
            if (!contrasenaValida) {
                return res.status(401).json({ error: "Credenciales incorrectas" });
            }
            
            const token = jwt.sign({ id: user.id, correo: user.correo }, "secreto", { expiresIn: "1h" });
            res.json({ mensaje: "Login exitoso", token });
        } catch (e) {
            res.status(500).json({ error: "Error en la petición" });
        }
    }

    static async register(req, res) {
        try {
            let { nombre, correo, contrasena } = req.body;
            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(contrasena, salt);
            
            let user = await UserService.crearUsuarios(nombre, correo, hashedPassword);
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
