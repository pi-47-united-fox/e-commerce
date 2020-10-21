const { User, Cart, Product } = require("../models/index");

class CartController {
    static async postCart(req, res, next) {
        let inputQty = +req.body.qty;

        try {
            let productStock = await Product.findByPk(req.params.productId);
            if (productStock.stock < inputQty) {
                throw {
                    name: "stock error",
                    message: "stock limited !",
                    statusCode: 400,
                };
            } else {
                let checkUser = await Cart.findAll({
                    where: { ProductId: req.params.productId, UserId: req.userData.id },
                });
                if (checkUser.length === 0) {
                    let value = {
                        UserId: req.userData.id,
                        ProductId: req.params.productId,
                        qty: inputQty,
                        status: "undone",
                    };
                    let newStock = productStock.stock - req.body.qty;
                    let cart = await Cart.create(value);
                    res.status(201).json(cart);
                    let updateStock = await Product.update(
                        { stock: newStock },
                        {
                            where: { id: req.params.productId },
                        }
                    );

                } else {
                    let checkPk = await Cart.findOne({
                        where: { ProductId: req.params.productId, UserId: req.userData.id },
                    });
                    let newQty = checkPk.qty;
                    console.log(newQty);
                    // res.status(200).json(checkPk.qty);
                    let value = {
                        qty: inputQty + newQty,
                    };
                    let newStock = productStock.stock - +req.body.qty;
                    let updateCart = await Cart.update(value, {
                        where: {
                            ProductId: req.params.productId,
                            UserId: req.userData.id,
                        },
                        returning: true,
                    });
                    let updateStock = await Product.update(
                        { stock: newStock },
                        {
                            where: { id: req.params.productId },
                        }
                    );
                    res.status(201).json(updateCart[1][0]);
                }
            }
        } catch (err) {
            next(err);
        }
    }
    // Get All
    static async getAllCart(req, res, next) {
        console.log(req.userData);
        try {
            let data = await Cart.findAll({
                where: { UserId: req.userData.id },
                include: Product,
            });
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    }
    // Update Cart
    static async putCart(req, res, next) {
        let inputQty = +req.body.qty;
        let cartId = req.params.id;

        try {
            let qtyCart = await Cart.findByPk(cartId);
            let cartQty = qtyCart.qty;
            let ProductId = qtyCart.ProductId
            let productStock = await Product.findByPk(ProductId);
            if (productStock.stock < inputQty) {
                throw {
                    name: "stock error",
                    message: "stock limited !",
                    statusCode: 400,
                };
            } else {
                if (inputQty === cartQty) {
                    throw {
                        name: "same quantity",
                        message: "ngapain update kalo sama",
                        statusCode: 404,
                    };
                } else if (inputQty > cartQty) {
                    let selisihQty = inputQty - cartQty;
                    let value = {
                        qty: inputQty,
                    };
                    let newStock = productStock.stock - selisihQty;
                    let cart = await Cart.update(value, { where: { id: req.params.id } });
                    if (cart[0] === 1) {
                        res.status(201).json({ message: "update succes" });
                    }
                    let updateStock = await Product.update(
                        { stock: newStock },
                        {
                            where: { id: ProductId },
                        }
                    );
                } else {
                    let selisihQty = cartQty - inputQty
                    let value = {
                        qty: inputQty,
                    };

                    let newStock = productStock.stock + selisihQty;
                    let cart = await Cart.update(value, { where: { id: req.params.id } });
                    if (cart[0] === 1) {
                        res.status(201).json({ message: "update succes" });
                    }
                    let updateStock = await Product.update(
                        { stock: newStock },
                        {
                            where: { id: ProductId },
                        }
                    );
                }
            }
        } catch (err) {
            next(err);
        }
    }
    static async deleteCart(req, res, next) {
        try {
            let dataCart = await Cart.findByPk(req.params.id);
            let ProductId = dataCart.ProductId
            console.log(ProductId);
            let stockProduct = await Product.findByPk(ProductId);
            let newStock = stockProduct.stock + dataCart.qty;

            let value = {
                stock: newStock,
            };
            let updateProduct = await Product.update(value, {
                where: { id: ProductId },
            });
            let deleteCart = await Cart.destroy({ where: { id: req.params.id } });
            if (deleteCart === 1) {
                res.status(200).json({ message: "delete success" });
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = {
    CartController,
};
