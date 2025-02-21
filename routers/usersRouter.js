const express = require("express");
const router = express.Router();
let UserController=require("../../controllers/userController")
// rutas user
router.get('/user', UserController.obtenerUsuarios);
router.post('/login', UserController.login);
router.post('/user', UserController.register);
router.delete('/user/:id', UserController.eliminarUsuarios);
router.put('/user/:id', UserController.actualizarUsuarios);

module.exports = router;
