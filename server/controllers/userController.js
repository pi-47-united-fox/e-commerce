const { User } = require('../models')
const { comparePass } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class userController {
    static async register(req, res, next) {
        try {
            const { email, password } = req.body
            const newUser = await User.create({
                email,
                password
            })
            res.status(201).json(`Welcome to the club ${newUser.email}`)
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body

        if (!email || !password) {
            return next({
                name: "BadRequest",
                message: "Must Enter Email and Password",
            });
        }

        const user = await User.findOne({
            where: {
                email
            }
        })

        try {
            if (!user) {
                return next({
                    name: "Unauthorized",
                    message: 'Wrong email/password'
                })
            } else if (!comparePass(password, user.password)) {
                return next({
                    name: "Unauthorized",
                    message: 'Wrong email/password'
                })
            } else {
                const access_token = signToken({ id: user.id, email: user.email, role: user.role })
                res.status(201).json({
                    access_token
                })
                req.headers = access_token
            }
        } catch (err) {
            return next({
                name: 'InternalServerError',
                message: err.message
            })
        }
    }
}

module.exports = userController