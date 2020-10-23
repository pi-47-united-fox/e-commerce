const { User } = require('../models')
const { comparePassword } = require('../helpers/bcryptjs')
const { signToken } = require('../helpers/jwt')
const transporter = require('../helpers/mailer')

class UserController{
    static loginHandler(req,res,next){
        const { email,password } = req.body
        if(!email || !password){
            next({name:'LoginFail',message:'Email/Password Cannot be empty',status:400})
        }else{
            User.findOne({where:{email}})
            .then(result=>{
                if(!result){
                    next({name:'LoginFail',message:'Email Not Found !',status:404})
                }else if(!comparePassword(password,result.password)){
                    next({name:'LoginFail',message:'Wrong Email/Password',status:401})
                }else{
                    const access_token = signToken({id:result.id,email:result.email,role:result.role})
                    res.status(201).json({access_token})
                }
            })
            .catch(err=>{
                console.log(err)
                next(err)
            })
        }
    }

    static registerHandler(req,res,next){
        const { email, password } = req.body
        const newUser = {email,password}

        User.findOne({where:{email}})
            .then(result=>{
                if(result){
                    next({name:'emailnotavailable',message:'email already registered',status:401})
                }else{
                    return User.create(newUser)
                }
            })
            .then(result2=>{
                let mailOptions={
                    from:'Brompton <idhamdummy3@gmail.com>',
                    to:email,
                    subject:'Register Success',
                    html:`Terimakasih Sudah Daftar di Ecommerce idham untuk testing

                    `
                }
                transporter.sendMail(mailOptions,(errmail,resultmail)=>{
                    if(errmail){
                        next(errmail)
                    } 
                    res.status(201).json({result2,message:'register done'})
                })
            })
            .catch(err=>{
                next(err)
            })
    }
}



module.exports = {
    UserController
}