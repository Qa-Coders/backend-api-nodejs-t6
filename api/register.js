const beautifulUnique = require('mongoose-beautiful-unique-validation');
const restful = require('node-restful');
const mongoose = restful.mongoose

const registerSchema = new mongoose.Schema({ 
    fullName: { type: string, require: true},
    mail: { type: string, require: true},
    phone: { type: string, require: false},
    address: { type: string, require:true},
    number: { type: string, require: false},
    complement: { type: string, require: false}
})

registerSchema.plugin(beautifulUnique)

module.exports = restful.model('Register', registerSchema)