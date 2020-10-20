const {Product, User, Cart} = require('../models/index')

class productController{
    static addHandler(req,res,next){
        const input = {
            name: req.body.name,
            image_url: req.body.image_url,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category
        }
        Product.create(input)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            //console.log(JSON.stringify(err,null,2))
            next(err)
        })
    }

    static async listHandler(req,res,next){
        try{
            const data = await Product.findAll() 

            res.status(200).json(data)
           
        }
        catch(err){
            next(err)
        }

    }

    static async showCart (req,res,next) {
        try{
            const datacart = await Cart.findAll({where: {
                UserId: +req.userData.id
            },include:[Product]})

            res.status(200).json(datacart)
        }
        catch(err){
            next(err)
        }
    }

    static async addToCart (req,res,next) {
        try{
            const obj = {
                ProductId: +req.params.id,
                UserId: +req.userData.id,
                quantity: (!req.body.quantity) ? 1 : Number(req.body.quantity)
            }

            const findCart = await Cart.findOne({where: {
                ProductId: +req.params.id 
            }, include: [Product]})
            if(findCart){
                // console.log(JSON.stringify(findCart,null,2))
                const objQuantity = {
                    quantity: (!req.body.quantity) ? findCart.quantity + 1 : findCart.quantity + Number(req.body.quantity)
                }

                const objStock = {
                    stock: (!req.body.quantity) ? findCart.Product.stock -1 : findCart.Product.stock - Number(req.body.quantity)
                }
                if(objQuantity.quantity > objStock.stock){
                    res.status(400).json({message: `Exceeded amount of stock ${findCart.Product.stock}`})
                }
                else{
                    const updateQty = await Cart.update(objQuantity,{where:{
                        ProductId: +req.params.id
                    }})

                    const updateStock = await Product.update(objStock,{where:{
                        id: +req.params.id
                    }})
                }
                
                res.status(200).json(await Cart.findByPk(+req.params.id,{include:[Product]}))
            }
            else{
                const addCart = await Cart.create(obj)
                // console.log(addCart)
                const findStock = await Product.findOne({where:{id:+req.params.id}})
                //console.log(addCart.quantity, findStock.stock)
                const objUpdateStock = {
                    stock: findStock.stock - addCart.quantity
                }
                const dataProduct = await Product.update(objUpdateStock,{where:{id:+req.params.id}})
                res.status(201).json(addCart)
            }
        
        }
        catch(err){
            next(err)
        }
    }

    static async deleteCart (req, res, next) {
        try{
            const dataCart = await Cart.findOne({where: {
                ProductId: +req.params.id
            },include: [Product] })

            console.log(dataCart.Product.stock, dataCart.quantity)
            const objUpdateStock = {
                stock: dataCart.Product.stock + dataCart.quantity
            }

            const updateStock = await Product.update(objUpdateStock, {where: {id: +req.params.id}})


            const deleteCart = await Cart.destroy({where: {
                ProductId: +req.params.id
            }})

            res.status(200).json({message: 'Removed From Card'})
        }
        catch(err) {
            next(err)
        }
    }

    static async putHandler(req,res,next){
        try{
            const input = {
                name: req.body.name,
                image_url: req.body.image_url,
                price: req.body.price,
                stock: req.body.stock,
                category: req.body.category
            }
            const data = await Product.update(input,{where:{
                id:+req.params.id
            }})

            if(!data[0]){
                next({name: 'Not Found', message: 'Data not found!'})
            }
            else{
                res.status(200).json(await Product.findByPk(+req.params.id))
            }
        }   
        catch(err){
            next(err)
        }
    }

    static async deleteHandler(req,res,next){
        try{
            const data = await Product.destroy({where:{id:+req.params.id}})

            if(data){
                res.status(200).json({message: "Product success to delete"})
            } 
            else{
                next({name: 'Not Found', message: 'Data not found!'})
            }

        }
        catch(err){
            next(err)
        }
    }

}

module.exports = productController