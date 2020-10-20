const { User } = require("../models/index");
const bcryptjs = require("bcryptjs");
const { signToken } = require("../helper/jwt");

class UserController {
  static async register(req, res, next) {
    const { name, email, password } = req.body;
    try {
      let findUser = await User.findOne({ where: { email: email } });
      if (findUser) {
        throw {
          name: "already email",
          message: "email already register !",
          statusCode: 400,
        };
      } else {
        let user = await User.create({
          name: name,
          email: email,
          password: password,
          role: "customer",
        });
        res.status(201).json({
          id: user.id,
          name: user.name,
          email: user.email,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ where: { email: email } });
      if (!user) {
        throw {
          name: "unauthorized",
          message: "wrong email/password !",
          statusCode: 400,
        };
      } else {
        let pass = bcryptjs.compareSync(password, user.password);
        if (!pass) {
          throw {
            name: "unauthorized",
            message: "wrong email/password !",
            statusCode: 400,
          };
        } else {
          let access_token = signToken({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          });
          return res.status(201).json({ access_token });
        }
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  UserController,
};
