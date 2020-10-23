const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt.js')
const { signToken } = require('../helpers/jwt.js') 


class UserController{
    static customerRegister(req, res, next){
        const customerInput = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({where: {email: customerInput.email}})
            .then(user => {
                if(user){
                    next({name:"Non unique email", message: "Email already registered!"})
                }
                else{
                    return User.create(customerInput)
                }
            })
            .then(user => {
                res.status(201).json({id:user.id, email:user.email})
            })
            .catch(err => {
                next({message: err.message})
            })
    }

    static login(req, res, next){
        const userInput = {
            email: req.body.email,
            password: req.body.password
        }
        if(userInput.email === '' || userInput.password === ''){
            res.status(400).json({
                name: "Bad Request",
                message: "Please input email and/or password"
            })
        }
        else{
            User.findOne({
                where:{
                    email: userInput.email
                }
            })
                .then(user => {
                    if(!user){
                        next({
                            name: 'Unauthorized',
                            message: 'Wrong email or password!'
                        })
                        // next({
                        //     name: 'Unauthorized',
                        //     message: 'Please use the correct email or password!'
                        // })
                    }
                    else if(!comparePassword(userInput.password, user.password)) {
                        next({
                            name: 'Unauthorized',
                            message: 'Wrong email or password!'
                        })
                        // next({
                        //     name: 'Unauthorized',
                        //     message: 'Please use the correct email or password!'
                        // })
                    }
                    else{
                        const access_token = signToken({id:user.id, email: user.email})
                        res.status(200).json({access_token})
                    }
                })
                .catch(err => {
                    next({message: err.message})
                })

        }

    }
}

module.exports = UserController