"use strict";

const { Cart, Product } = require("../models");

class CartController {
	static getAllProcessed(req, res, next) {
		Cart.findAll({
			where: { status: "processing", UserId: req.userData.id },
			include: { model: Product },
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

	static addOrder(req, res, next) {
		const orderData = {
			UserId: req.userData.id,
			ProductId: req.body.ProductId,
			status: "processing",
			quantity: req.body.quantity,
		};

		Cart.create(orderData)
			.then((result) => {
				if (!result) {
					next({ name: "BadRequest", message: "Failed to add Order" });
				} else {
					const { id, UserId, ProductId, status, quantity } = result;
					res.status(201).json({ id, UserId, ProductId, status, quantity });
				}
			})
			.catch((err) => {
				next(err);
			});
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
