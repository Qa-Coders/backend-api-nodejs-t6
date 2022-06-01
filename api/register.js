const { model } = require('mongoose')
const beautifulUnique = require('mongoose-beautful-unique-validation');
const restful = require('node-restful');
const mongoose = restful.mongoose

const registerSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: String, required: false },
    address: { type: String, required: true },
    number: { type: String, required: false },
    complement: { type: String, required: false }
})

registerSchema.plugin(beautifulUnique)

module.exports = restful.model('Register', registerSchema)