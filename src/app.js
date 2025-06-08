//Requerer para o app.js a biblioteca Express
const express = require ('express')
//Criar um objeto para instanciar o express
const app = express()
// requerer a config de caminhos
const path = require('path') 
// requerer as rotas
const router = require('./routers/routers')

//receber dados pela URL
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//configurar o ejs
app.set('view engine','ejs') 
app.set('views', path.join(__dirname,'../src/views')) 

//Configurar os arquivos estáticos
app.use(express.static(path.join(__dirname, '../public'))) 

//Rota inicial
app.use('/', router)

//exportar o app, para utilizar externo
module.exports = app
