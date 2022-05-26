module.exports = function(req, res, next){
    res.header('Acess-Control-Allow-Origin','*')
    res.header('Acess-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.header('Acess-Control-Allow-Methods','Origin, X-Requested-With, Content-type, Accept, Authorization')
    next()
}