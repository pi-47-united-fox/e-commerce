const { User, Cart, Product } = require("../models/index");

class CartController {
    static async postCart(req, res, next) {
        try {
            let checkUser = await Cart.findAll({
                where: { ProductId: req.params.productId, UserId: req.userData.id },
            });
            //   console.log(checkUser);
            if (checkUser.length === 0) {
                let productStock = await Product.findByPk(req.params.productId);
                // console.log(productStock);
                if (productStock.stock < req.body.qty) {
                    throw {
                        name: "stock error",
                        message: "stock limited !",
                        statusCode: 400,
                    };
                } else {
                    let value = {
                        UserId: req.userData.id,
                        ProductId: req.params.productId,
                        qty: req.body.qty,
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
                }
            } else {
                // res.send("checkPk");
                let checkPk = await Cart.findOne({
                    where: { ProductId: req.params.productId, UserId: req.userData.id },
                });
                let newQty = checkPk.qty;
                console.log(newQty);
                // res.status(200).json(checkPk.qty);
                let productStock = await Product.findByPk(req.params.productId);
                // console.log(productStock);
                if (productStock.stock < req.body.qty) {
                    throw {
                        name: "stock error",
                        message: "stock limited !",
                        statusCode: 400,
                    };
                } else {
                    let value = {
                        qty: +req.body.qty + newQty,
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
            let productStock = await Product.findByPk(req.body.productId);
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
                            where: { id: req.body.productId },
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
                            where: { id: req.body.productId },
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
            let stockProduct = await Product.findByPk(req.body.productId);
            let newStock = stockProduct.stock + dataCart.qty;

            let value = {
                stock: newStock,
            };
            let updateProduct = await Product.update(value, {
                where: { id: req.body.productId },
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
