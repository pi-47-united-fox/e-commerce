const {Cart} = require('../models');

function authorizationCustomer (req, res, next) {
    Cart.findByPk(req.params.CartId)
        .then((result) => {
            if (result.UserId === req.userData.id) {
                next()
            } else {
                res.status(401).json({
                    message: "unauthorized"
                })
            }
        }).catch((err) => {
            res.status(500).json({
                message: 'Internal server error!'
            })
        });
}

module.exports = authorizationCustomer