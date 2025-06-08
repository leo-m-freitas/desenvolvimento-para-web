const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/users_controller')

router.post('/save-user', UsersController.new)

router.get('/',(req, res)=>{res.render('home')})

// rota de login
router.get('/login', (req, res)=> {res.render('login')})

// rota para listar usuarios
router.get('/usuarios', (req, res) => {res.render('partials/list_usuarios')})

router.get('#formulario-cadastro', UsersController.cadUsuario)

module.exports = router