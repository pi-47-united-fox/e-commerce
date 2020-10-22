const { Product, User, Cart, sequelize, Wishlist } = require('../models/index')

class productController {
    static addHandler(req, res, next) {
        const input = {
            name: req.body.name,
            image_url: req.body.image_url,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category
        }
        Product.create(input)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                //console.log(JSON.stringify(err,null,2))
                next(err)
            })
    }

    static async listHandler(req, res, next) {
        try {
            const data = await Product.findAll()

            res.status(200).json(data)

        }
        catch (err) {
            next(err)
        }

    }

    static async showCart(req, res, next) {
        try {
            const datacart = await Cart.findAll({
                where: {
                    UserId: +req.userData.id
                }, include: [Product]
            })

            res.status(200).json(datacart)
        }
        catch (err) {
            next(err)
        }
    }

    static async addToCart(req, res, next) {
        try {
            const obj = {
                ProductId: +req.params.id,
                UserId: +req.userData.id,
                quantity: (!req.body.quantity) ? 1 : Number(req.body.quantity)
            }

            if (obj.quantity == 0) {
                res.status(400).json({ message: 'Quantity cannot be 0' })
            }

            const findCart = await Cart.findOne({
                where: {
                    ProductId: +req.params.id,
                    UserId: +req.userData.id
                }, include: [Product]
            })
            if (findCart) {
                // console.log(JSON.stringify(findCart,null,2))
                const objQuantity = {
                    quantity: (!req.body.quantity) ? findCart.quantity + 1 : Number(req.body.quantity)
                }

                if (objQuantity.quantity > findCart.Product.stock) {
                    res.status(400).json({ message: `Exceeded max stock ${findCart.Product.stock}` })
                }
                else {
                    const updateQty = await Cart.update(objQuantity, {
                        where: {
                            ProductId: +req.params.id
                        }
                    })

                }

                res.status(200).json(await Cart.findByPk(+req.params.id, { include: [Product] }))
            }
            else {
                const addCart = await Cart.create(obj)

                res.status(201).json(addCart)
            }

        }
        catch (err) {
            next(err)
        }
    }

    static async deleteCart(req, res, next) {
        try {
            const deleteCart = await Cart.destroy({
                where: {
                    ProductId: +req.params.id, UserId: +req.userData.id
                }
            })

            res.status(200).json({ message: 'Removed From Cart' })
        }
        catch (err) {
            next(err)
        }
    }

    static async checkOutHandler(req, res, next) {
        const t = await sequelize.transaction()
        try {
            const checkout = await Cart.findAll({
                where:
                    { status: 'unpaid', UserId: +req.userData.id }, include: [Product]
            })

            checkout.forEach(async (element) => {
                if (element.quantity > element.Product.stock) {
                    res.status(400).json({ message: `Exceeded max stock ${element.Product.stock}` })
                }
                
                else {
                    if(element.Product.stock - element.quantity === 0) {
                        res.status(400).json({message: `Stock can't be zero 0`})
                    }
                    else{
                        await Product.update({ stock: element.Product.stock - element.quantity },
                           { where: { id: element.ProductId } }, { transaction: t })
                    }
            
                }
                // console.log(JSON.stringify(element,null,2))
            });

            const updateStatus = await Cart.update({ status: 'ispaid' }, { where: { status: 'unpaid', UserId: +req.userData.id } }, { transaction: t })
            if (updateStatus) {
                res.status(200).json({ message: 'Checkout Completed' })
            }

            await t.commit()

        }
        catch (err) {
            await t.rollback()
            next(err)
        }
    }

    static async fetchIsPaid(req, res, next) {
        try{
        let isPaid = await Cart.findAll({
            where: { status: "ispaid", UserId: +req.userData.id },
            include: [Product],
            order: [["createdAt", "ASC"]],
        })
            if (isPaid.length) {
                isPaid = isPaid.map((el) => {
                    return {
                        id: el.id,
                        UserId: el.UserId,
                        status: el.status,
                        quantity: el.quantity,
                        Product: el.Product,
                    };
                });
            }
            res.status(200).json(isPaid);
        }
        catch(err) {
            next(err)
        }
    }

    static async showWishlist(req, res, next) {
        try {
            const dataWishlist = await Wishlist.findAll({
                where: {
                    UserId: +req.userData.id
                }, include: [Product]
            })

            res.status(200).json(dataWishlist)
        }
        catch (err) {
            next(err)
        }
    }

    static async addWishlist (req,res,next) {
        try{
            
            let obj = {
                ProductId: +req.params.id,
                UserId: +req.userData.id
            }

            const resultFind = await Wishlist.findOne({where: {ProductId: +req.params.id, UserId: +req.userData.id}})
            if(resultFind){
                res.status(401).json({message: 'Already Added To Wishlist'})
            }
            else{
                const data = await Wishlist.create(obj)
                res.status(201).json({
                    id: data.id,
                    ProductId: data.ProductId,
                    UserId: data.UserId
                })
            }
        }
        catch(err){
            next(err)
        }
    }

    static async deleteWishlist (req, res, next) {
        try{
            
            const data = await Wishlist.destroy({where: {
                ProductId: req.params.id, UserId: req.userData.id
            }})

            res.status(200).json({
                message: 'Successfully removed from wishlist'
            })
        }
        catch(err){
            next(err)
        }
    }


    static async putHandler(req, res, next) {
    try {
        const input = {
            name: req.body.name,
            image_url: req.body.image_url,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category
        }
        const data = await Product.update(input, {
            where: {
                id: +req.params.id
            }
        })

        if (!data[0]) {
            next({ name: 'Not Found', message: 'Data not found!' })
        }
        else {
            res.status(200).json(await Product.findByPk(+req.params.id))
        }
    }
    catch (err) {
        next(err)
    }
}

    static async deleteHandler(req, res, next) {
    try {
        const data = await Product.destroy({ where: { id: +req.params.id } })

        if (data) {
            res.status(200).json({ message: "Product success to delete" })
        }
        else {
            next({ name: 'Not Found', message: 'Data not found!' })
        }

    }
    catch (err) {
        next(err)
    }
}

}

module.exports = productController