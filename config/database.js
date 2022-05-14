const mongoose = require('mongoose')
const args = require('args-parser')(process.argv)
mongoose.Promise = require('Bluebird')

if (args.production)
module.exports = mongoose.connect('mongodb://nome_banco:senha_do_banco@servidor.com.br:27017/usuario')
else
module.exports = mongoose.connect('mongodb://localhost/banco_dadosT6')

mongoose.Error.messages.general.required = "O campo '{PATH}' É OBRIGATÓRIO."
mongoose.Error.messages.Number.min = "O campo '{PATH}' informado é menor do que o limite de '{MIN}'." 
mongoose.Error.messages.Number.max = "O campo '{PATH}' informado é maior do que o limite de '{MAX}'." 
mongoose.Error.messages.String = "O '{VALUE}' não é valido para o campo '{PATH}'." 

