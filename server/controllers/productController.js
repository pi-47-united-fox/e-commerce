const { Product } = require('../models')

class ProductController {
    static create(req, res, next) {
        const newProduct = {
            name: req.body.name,
            image_url: req.body.image_url,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category
        }
        Product.create(newProduct)
            .then(data => {
                return res.status(201).json(`Product ${newProduct.name} created succesfully`)
            })
            .catch(err => {
                return next(err)
            })
    }

    static async read(req, res, next) {
        try {
            const data = await Product.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })
            return res.status(200).json(data)
        } catch (err) {
            return next(err)
        }
    }

    static async readOne(req, res, next) {
        console.log('masuk');
        try {
            const id = req.params.id
            const data = await Product.findOne({
                where: {
                    id
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id
            const { name, image_url, price, stock, category } = req.body
            const data = await Product.update({
                name,
                image_url,
                price,
                stock,
                category
            }, {
                where: {
                    id
                },
                returning: true
            })
            if (data) {
                if (data[0] === 1) {
                    return res.status(201).json({ message: 'Edit Successfully', updated: data[1] })
                } else {
                    return res.status(404).json({ message: 'Invalid Product' })
                }
            }

        } catch (err) {
            return next(err)
        }
    }

    static delete(req, res, next) {
        Product.destroy({
                where: {
                    id: +req.params.id
                }
            })
            .then(result => {
                return res.status(201).json({ message: 'Product is sucessfully deleted' })
            })
            .catch(err => {
                return next(err)
            })
    }
}

module.exports = ProductController