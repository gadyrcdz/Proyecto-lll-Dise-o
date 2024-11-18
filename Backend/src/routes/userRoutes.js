const express = require('express');
const { insertarUsuario } = require('../controllers/usersController');
const router = express.Router();


router.post('/users', insertarUsuario);

module.exports = router;
