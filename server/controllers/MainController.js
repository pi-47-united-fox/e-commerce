const { User }          = require("../models");
const { Jwt, BcryptJs } = require("../helpers");
const nodemailer        = require('nodemailer')


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
                const confirmToken = Jwt.generate(result.dataValues.id, result.dataValues.email, result.dataValues.role)
                // Send the email
                // Belum diaplikasikan sepenuhnya karena email terkirim  tidak diterima 
                const transporter = nodemailer.createTransport({ host: 'smtp.mailtrap.io', port: 2525, auth: { user: process.env.EMAIL, pass: process.env.PASSWORD } });
                const mailOptions = { 
                    from: 'no-reply@unshop.com',
                    to: result.dataValues.email,
                    subject: 'Hello....', 
                    text: `Confirm use link: ${process.env.LINK}/confirm/${confirmToken}`,
                    html: `<h1>Confirm use link: </h1> <a href="${process.env.LINK}/confirm/${confirmToken}">${process.env.LINK}/confirm/${confirmToken}</a>`
                }
                // console.log('masuk sini')
                transporter.sendMail(mailOptions, function (err, info) {
                    console.log('selsai kirim', mailOptions)
                    if (err) {
                        console.log('dari nodemailer', err)
                    } else {
                        console.log('dari nodemailer info', info)
                    }
                });

                return res.status(201).json({
                   access_token: access_token
                })
            }).catch((err) => {
                return next(err)
            });
        }
    }

    static confirmEmailC (req,res, next) {
        const {confirmToken} = req.params
        const encoded = Jwt.check(confirmToken)
        User.update({
            isActive: true
        }, {
            where: {
                id: encoded.id
            }
        }).then((result) => {
            res.send(`
            <h1>Your account now Active on full Services</h1>
            `)
        }).catch((err) => {
            res.send(`
            <h1>Invalid Activation link</h1>
            `)
        });
    }
}

module.exports = MainControoler