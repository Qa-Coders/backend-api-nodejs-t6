const { lazyrouter } = require('express/lib/application')
const mongoose = require('mongoose')
const args = require('args-parser')(process.argv)
mongoose.Promise = require('Bluebird')

if (args.production)
    module.exports = mongoose.connect('mongodb://nome_banco:senha@servidor.com.br:27017/usuario_do_banco')
else
    module.exports = mongoose.connect('mongodb://localhost/banco_dadosT6')

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{PATH}' informado é menor que o limite mínimo de '{MIN}'. ."
mongoose.Error.messages.Number.max = "O '{PATH}' informado é maior que o limite máximo de '{MIN}'."
mongoose.Error.messages.Number.String = "O campo '{VALUE}' não é válido para o campo '{PATH}'."
