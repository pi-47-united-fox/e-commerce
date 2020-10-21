const { User }          = require("../models");
const { Jwt, BcryptJs } = require("../helpers");


class MainControoler {
    static loginUserC(req, res, next) {
        // console.log (req.body)
        if (req.body.email == "" || req.body.password == "") {
            return next({
                name: "invalid email pw input",
            });
        } else {
            User.findOne({
                where: { email: req.body.email },
            }).then((result) => {
                const pwCheck = BcryptJs.check(req.body.password, result.password)
                if (pwCheck) {
                    let access_token = Jwt.generate(result.id, result.email, result.role);
                    res.status(200).json({
                        access_token
                    });
                } else {
                    return next({
                        name: "invalid email pw input",
                    });
                }
            }).catch((err) => {
                return next({
                    name: "invalid email pw input",
                });
            });
        }
    }


    static registerUserC (req, res, next) {
        // console.log('dari register', req.body.email, req.body.password)
        if (req.body.email == "" || req.body.password == "") {
            return next({
                name: "invalid email pw input",
            });
        } else {
            User.create({
                email: req.body.email,
                password: req.body.password
            }).then((result) => {
                const access_token = Jwt.generate(result.dataValues.id, result.dataValues.email, result.dataValues.role)
                // console.log('dari selesai create', result.dataValues)
                console.log('dari register', access_token)
                return res.status(201).json({
                   access_token: access_token
                })
            }).catch((err) => {
                // console.log('dari register', err)
                return next(err)
            });
        }
    }
}

module.exports = MainControoler