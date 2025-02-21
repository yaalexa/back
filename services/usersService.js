const { User } = require("../models");
class UsersService{
    static async obtenerUser() {
           return await User.findAll();
    }
    static async crearUsarios(nombre,correo,contrasena) {
        return await User.create({ nombre, correo, contrasena });
    }
  }

module.exports = UsersService;