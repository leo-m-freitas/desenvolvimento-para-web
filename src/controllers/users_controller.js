const UsersModel = require('../models/users_models')

class UsersController{

    cadUsuario(req,res){
        res.render('#formulario-cadastro')
    }

    async new(req, res) {
        let{name, email, password} = req.body //form html

        let result = await UsersModel.create(name, email, password)

        result.validated
        ? res.render('partials/list_usuarios', {message: result.message})
        : res.render('erro', {message: result.message})
    }
}

module.exports = new UsersController()