const { verify } = require("../helper/jwt");
const { User, Product, Cart } = require("../models");

const authenticationCust = (req, res, next) => {
    const decode = verify(req.headers.access_token);
    //   console.log(decode, "<<<<");
    User.findOne({ where: { email: decode.email } })
        .then((user) => {
            if (!user) {
                throw {
                    name: "unauthorized",
                    message: "not found user",
                    statusCode: 400,
                };
            } else {
                req.userData = decode;
                next();
            }
        })
        .catch((err) => {
            next(err);
        });
};

const authorizationCust = (req, res, next) => {
    Cart.findByPk(req.params.id)
        .then((data) => {
            if (!data) {
                throw {
                    name: "unauthorized",
                    message: "not found data",
                    statusCode: 400,
                };
            } else if (req.userData.id !== data.UserId) {
                throw {
                    name: "unauthorized",
                    message: "you're not authorized",
                    statusCode: 400,
                };
            } else {
                next();
            }
        })
        .catch((err) => {
            next(err);
        });
};

module.exports = {
    authenticationCust,
    authorizationCust
};
