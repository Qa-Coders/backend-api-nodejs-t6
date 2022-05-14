const _ = require('lodash')
const Register = require('./register')

Register.methods(['get', 'post', 'put', 'delete'])
Register.updateOptions({ new: true, runValidators: true})

Register.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)
Register.before('post', register).before('put', register)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if (bundle.errors){
        var errors = parseErrors(bundle.errors)   
        res.status(500).json({ errors})     
    } else {
        next()
    }
}


function ParseErrors(nodeRestfulErrors){
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

const sendErrorsFromDB = function(res,dbErrors) {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

function register(req, res, next){
    const FullName = req.body.FullName || ''
}














newBody.save(err =>{
    if(err){
        return sendErrorsFromDB(res, err)
    } else {

        res.status(201).json(newBody)
    }
})

module.exports = register

