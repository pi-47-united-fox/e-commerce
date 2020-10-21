"use strict";

const { Cart, Product, Category } = require("../models");

class CartController {
	static getAllProcessed(req, res, next) {
		Cart.findAll({
			where: { status: "processing", UserId: req.userData.id },
			include: {
				model: Product,
				include: {
					model: Category,
				},
			},
			order: [["id", "ASC"]],
		})
			.then((result) => {
				if (result.length) {
					result = result.map((el) => {
						return {
							id: el.id,
							UserId: el.UserId,
							status: el.status,
							quantity: el.quantity,
							Product: el.Product,
						};
					});
				}
				res.status(200).json(result);
			})
			.catch((err) => {
				next(err);
			});
	}

	static async addOrder(req, res, next) {
		try {
			const orders = await Cart.findAll({
				where: { status: "processing", UserId: req.userData.id },
				include: { model: Product },
			});

			let isSame = false;
			orders.forEach(async (el) => {
				if (el.Product.id === +req.body.ProductId) {
					isSame = true;
					try {
						await Cart.update({ quantity: el.quantity + 1 }, { where: { id: el.id } });
					} catch (err) {
						next(err);
					}
				}
			});
			if (!isSame) {
				const orderData = {
					UserId: req.userData.id,
					ProductId: req.body.ProductId,
					status: "processing",
					quantity: req.body.quantity,
				};

				let result = await Cart.create(orderData);
				if (!result) {
					next({ name: "BadRequest", message: "Failed to add Order" });
				} else {
					const { id, UserId, ProductId, status, quantity } = result;
					res.status(201).json({ id, UserId, ProductId, status, quantity });
				}
			} else {
				res.status(201).json({ message: "Product already added to Cart, add Quantity" });
			}
		} catch (err) {
			next(err);
		}
	}

	static async finishOrder(req, res, next) {
		try {
			let orders = await Cart.findAll({
				where: { status: "processing", UserId: req.userData.id },
				include: { model: Product },
			});

			orders.forEach(async (el) => {
				try {
					await Product.update(
						{ stock: el.Product.stock - el.quantity },
						{ where: { id: el.Product.id } },
					);
				} catch (err) {
					next(err);
				}
			});

			const result = await Cart.update({ status: "finished" }, { where: { status: "processing" } });
			if (result) {
				res.status(200).json({ message: "Order finished being processed" });
			}
		} catch (err) {
			next(err);
		}
	}

	static deleteOrder(req, res, next) {
		Cart.destroy({ where: { id: req.params.id } })
			.then((result) => {
				if (!result) {
					next({ name: "BadRequest", message: "Failed to Delete Order" });
				} else {
					res.status(200).json({ message: "Delete Order successful" });
				}
			})
			.catch((err) => {
				next(err);
			});
	}

	static getAllFinished(req, res, next) {
		Cart.findAll({
			where: { status: "finished", UserId: req.userData.id },
			include: { model: Product },
			order: [["createdAt", "ASC"]],
		})
			.then((result) => {
				if (result.length) {
					result = result.map((el) => {
						return {
							id: el.id,
							UserId: el.UserId,
							status: el.status,
							quantity: el.quantity,
							Product: el.Product,
						};
					});
				}
				res.status(200).json(result);
			})
			.catch((err) => {
				next(err);
			});
	}

	static updateQuantity(req, res, next) {
		Cart.update({ quantity: req.body.quantity }, { where: { id: req.params.id } })
			.then((result) => {
				if (result) {
					res.status(200).json({ message: "Product quantity updated" });
				} else {
					next({ name: "BadRequest", message: "Failed to Update Order" });
				}
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = CartController;
