const { Product, User, Cart } = require("../models");

const authorization = (req, res, next) => {
  User.findOne({ where: { id: req.userData.id } })
    .then((data) => {
      if (!data) {
        console.log(data);
        return res.status(404).json({ msg: "User Not Found" });
      } else if (data.role !== "admin") {
        return res.status(401).json({ msg: "You do not have access" });
      } else {
        next();
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    });
};

const authorizationCart = (req, res, next) => {
  Cart.findByPk(+req.params.id)
    .then((data) => {
      if (!data) {
        console.log(data);
        return res.status(404).json({ msg: "Data Not Founds" });
      } else if (data.UserId !== req.userData.id) {
        return res.status(401).json({ msg: "You do not have access" });
      } else {
        next();
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    });
};

module.exports = {
  authorization,
  authorizationCart,
};
