//Requerer as variaveis de ambiente
require('dotenv').config()
// Requerer as funcionabilidades do app js
const app = require('./src/app') 


//Inicializar o servidor

app.listen(process.env.PORT,()=>{
    console.log('Servidor iniciado na Porta: ', process.env.PORT)
})