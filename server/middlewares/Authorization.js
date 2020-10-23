const { Product } = require('../models')

const Authorization=(req,res,next)=>{
    console.log('masuk author')
    if(req.userData.role !== 'admin'){
        next({name:'not authorized',message:'Not Authorized',status:401})
    }else{
        next()
    }
}


module.exports = {
    Authorization
}