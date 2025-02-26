const { User } = require("../models");
class UsersService{
    static async obtenerUser() {
           return await User.findAll();
  }
  static async obtenerUserPorCorreo(correo) {
        try {
            if (!correo) throw new Error("El correo es requerido");
            const user = await User.findOne({ where: { correo } });
            return user || null;
        } catch (error) {
            console.error("Error al buscar usuario:", error.message);
            throw error;
        }
    }
    static async crearUsarios(nombre, correo, contrasena) {
        console.log(nombre, correo, contrasena);
        return await User.create({ nombre, correo, contrasena });
    }
  }

module.exports = UsersService;