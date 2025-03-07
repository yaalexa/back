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

const { User } = require("../../models");

class UsersService {
  
  // Obtener todos los usuarios
  static async obtenerUsers() {
    return await User.findAll();
  }

  // Crear un usuario
  static async crearUsuario(nombre, correo, contrasena) {
    return await User.create({ nombre, correo, contrasena });
  }

  // Obtener usuario por correo
  static async obtenerUsuarioPorCorreo(correo) {
    try {
      if (!correo) throw new Error("El correo es obligatorio");
      let user = await User.findOne({ where: { correo } });
      if (!user) throw new Error("Usuario no encontrado");
      return user;
    } catch (error) {
      console.log("Error al buscar el usuario:", error.message);
      throw error;
    }
  }

  // Obtener usuario por ID
  static async obtenerUsuarioPorId(id) {
    try {
      let user = await User.findByPk(id);
      if (!user) throw new Error("Usuario no encontrado");
      return user;
    } catch (error) {
      console.log("Error al obtener el usuario por ID:", error.message);
      throw error;
    }
  }

  // Actualizar usuario por ID
  static async actualizarUsuario(id, datos) {
    try {
      let user = await User.findByPk(id);
      if (!user) throw new Error("Usuario no encontrado");

      await user.update(datos);
      return user;
    } catch (error) {
      console.log("Error al actualizar el usuario:", error.message);
      throw error;
    }
  }

  // Eliminar usuario por ID
  static async eliminarUsuario(id) {
    try {
      let user = await User.findByPk(id);
      if (!user) throw new Error("Usuario no encontrado");

      await user.destroy();
      return { message: "Usuario eliminado correctamente" };
    } catch (error) {
      console.log("Error al eliminar el usuario:", error.message);
      throw error;
    }
  }
}

module.exports = UsersService;



module.exports = UsersService;