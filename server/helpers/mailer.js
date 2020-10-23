const nodemailer = require('nodemailer')

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.MAILER,
        pass:process.env.PASSMAILER
    },
    tls:{
        rejectUnauthorized:false
    }

})


module.exports=transporter