"use strict";

const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

class UsersController {
	static login(req, res, next) {
		const userData = {
			email: req.body.email,
			password: req.body.password,
		};

		if (!userData.email || !userData.password) {
			return next({
				name: "BadRequest",
				message: "Must Enter Email and Password",
			});
		}

		User.findOne({ where: { email: userData.email } })
			.then((result) => {
				if (!result || !comparePassword(userData.password, result.password)) {
					next({
						name: "Unauthorized",
						message: "Wrong Email/Password",
					});
				} else {
					res.status(201).json({
						access_token: createToken({
							id: result.id,
							email: result.email,
							is_admin: result.is_admin,
						}),
						display_name: result.display_name,
					});
				}
			})
			.catch((err) => {
				next(err);
			});
	}

	static register(req, res, next) {
		const randomNumber = Math.floor(Math.random() * 78212) + 109873;

		const userData = {
			email: req.body.email,
			password: req.body.password,
			display_name: req.body.display_name,
			is_admin: false,
			img_url: `https://avatars.dicebear.com/api/male/${randomNumber}.svg`,
		};

		User.create(userData)
			.then((result) => {
				if (!result) {
					next({ name: "BadRequest", message: "Failed to create Account" });
				} else {
					const { id, email, display_name, img_url } = result;
					res.status(201).json({ id, email, display_name, img_url });
				}
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = UsersController;
