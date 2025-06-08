//requerer a parametrização do banco

const db = require('../config/data')

class UsersModel{
    async create(name, email, password){
        try {
            await db.insert({
                name: name,
                email: email,
                password: password
            }).table('users')

            return{validated: true, message: 'Usuário Cadastrado com Sucesso'}

        } catch (error) {
            return{validated: false, message: error}
        }
    }
}

module.exports = new UsersModel()