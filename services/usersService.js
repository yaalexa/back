const { User } = require("../models");
class UsersService{
    static async obtenerUser() {
           return await User.findAll();
  }
 /* static async obtenerUserPorCorreo(correo) {
        try {
            console.log("Buscando usuario con correo:", correo);
            const user = await User.findOne({ where: { correo } });

            if (!user) {
                console.log(" Usuario no encontrado");
                return null;
            }

            console.log(" Usuario encontrado:", user.toJSON()); // Convierte el usuario a JSON para evitar problemas de referencia circular
            return user;
        } catch (error) {
            console.error(" Error al buscar usuario:", error);
            throw error;
        }
    }*/
    static async crearUsarios(nombre,correo,contrasena) {
        return await User.create({ nombre, correo, contrasena });
    }
  }

module.exports = UsersService;