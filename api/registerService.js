const { functionsIn } = require('lodash')
const _ = require('lodash')
const register = require('./register')
const Register = require('./register')

Register.methods(['get', 'post', 'put', 'delete'])
Register.updateOptions({ new: true, runValidators: true })

Register.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)
Register.before('post', register).before('put', register)

function sendErrorsOrNext(req, res, next){
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    }else{
        next()
    }
}
function  parseErrors(nodeRestfulErrors){
    const error = []
    _.forIn(nodeRestfulErrors, console.error => errors.push(error.message))
    return errors
}

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

function register(req, res, next){
    const fullName = req.body.fullName || ''
    const mail = req.body.mail || ''
    const phone = req.body.phone || ''
    const address = req.body.address || ''
    const number = req.body.number || ''
    const complement = req.body.complement || ''

    if(fullName == null || fullName == ""){
        return res.status(400).send({ alert: ["O campo Nome Completo é obrigatório"]})
    }

    const newBody = new Register({
        fullName,
        mail,
        phone,
        address,
        number,
        complement
    })

    newBody.save(err =>{
        if(err){
            return sendErrorsFromDB(res, err)
        }else {
            next()
        }
    })
}