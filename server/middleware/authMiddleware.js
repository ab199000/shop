const jwt = require('jsonwebtoken')
const {secret_key} = require('../db')


module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({message:"Не авторизован"})
        }
        const decoded = jwt.verify(token,secret_key)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({message:"Не авторизован"})
    }
}