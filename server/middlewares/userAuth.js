const { verifyToken } = require('../helpers/jwt.js')
const { User, Cart } = require('../models/index.js')

// middleware for user authentication
const authentication = (req, res, next) => {
    const { access_token } = req.headers
    if(access_token){
        let decode = verifyToken(access_token)
        req.userData = decode
        User.findByPk(req.userData.id)
            .then(result => {
                if(!result){
                    next({name:'Not Found', message: "User not found."})
                }
                next()
            })
            .catch(err => {
                next(err)
            })
    }
    else{
        next({name: 'Unauthorized', message: "Invalid access!"})
    }
}

// middleware for admin authorization
const authorization = (req, res, next) => {
    const userData = req.userData

    User.findOne({
        where:{
            email: userData.email
        }
    })
        .then(result => {
            if(result && result.role === 'admin'){
                next()
            }
            else if(result && result.role !== 'admin'){
                next({name:'Forbidden', message: "You are not authorized."})
            }
            else if(!result){
                next({name:'Not Found', message: "User not found."})
            }
        })
        .catch(err => {
            next(err)
        })
}

// middleware for customer authorization that needs params
const customerAuthorization = (req, res, next) => {
    const userData = req.userData
    const CartId = req.params.id

    Cart.findByPk(CartId)
        .then(result => {
            console.log(result.UserId, 'xxx', userData.id)
            if(!result){
                next({name:'Not Found', message: "Cart not found."})
            }
            else if(result.UserId !== userData.id){
                next({name:'Forbidden', message: "You are not authorized."})
            }
            else{
                next()
            }
        })
        .catch(err => {
            next(err)
        })
}

// middleware for customer authorization that does not need params
const customerOnlyAuthorization = (req, res, next) => {
    const userData = req.userData

    User.findOne({
        where:{
            email: userData.email
        }
    })
        .then(result => {
            if(result && result.role === 'customer'){
                next()
            }
            else if(result && result.role !== 'customer'){
                next({name:'Forbidden', message: "You are not authorized."})
            }
            else if(!result){
                next({name:'Not Found', message: "User not found."})
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = {
    authentication,
    authorization,
    customerAuthorization,
    customerOnlyAuthorization
}