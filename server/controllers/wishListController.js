"use strict";

const { Product, WishList, Category } = require("../models");

class WishListController {
	static getAllWish(req, res, next) {
		WishList.findAll({
			where: { UserId: req.userData.id },
			include: {
				model: Product,
				include: {
					model: Category,
				},
			},
		})
			.then((result) => {
				res.status(200).json(result);
			})
			.catch((err) => {
				next(err);
			});
	}

	static async addWishList(req, res, next) {
		try {
			const isExist = await WishList.findAll({
				where: { UserId: req.userData.id, ProductId: req.body.ProductId },
			});
			if (isExist.length) {
				res.status(201).json({ message: "Product Already added to Wish List" });
			} else {
				const wishData = {
					UserId: req.userData.id,
					ProductId: req.body.ProductId,
				};

				await WishList.create(wishData);
				res.status(201).json({ message: "Product successfully added to Wish List" });
			}
		} catch (err) {
			next(err);
		}
	}

	static deleteWish(req, res, next) {
		WishList.destroy({ where: { id: req.params.id } })
			.then((result) => {
				if (!result) {
					next({ name: "BadRequest", message: "Failed to Delete Wish" });
				} else {
					res.status(200).json({ message: "Delete a Wish successful" });
				}
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = WishListController;
