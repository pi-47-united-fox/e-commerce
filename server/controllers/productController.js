const { Product, User, Cart, sequelize } = require('../models/index')

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
                    res.status(400).json({ message: `Exceeded amount of stock ${findCart.Product.stock}` })
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
                    ProductId: +req.params.id
                }
            })

            res.status(200).json({ message: 'Removed From Cart' })
        }
        catch (err) {
            next(err)
        }
    }

    static checkout(req, res, next) {
        sequelize.transaction((t) => {
            return Cart.findAll({
                where: {
                    UserId: +req.userData.id
                }, include: [Product], transaction: t
            })
        })
        .then(dataFindAll => {
            // dataFindAll.forEach(element => {
            //     if(element.quantity > element.Product.price){
            //         return 'Exceeded Stock limit'
            //     }
            //     return element
            // });
            for(let i = 0; i < dataFindAll.length; i++){
                return dataFindAll[i]
            }
             console.log(JSON.stringify(dataFindAll,null,2))
             console.log(t)
        })
        .catch(err => {
            console.log(err)
        })


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