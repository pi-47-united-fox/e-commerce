const route = require("express").Router();
const routeProduct = require("./product");
const routeUser = require("./user");
const routeCart = require("./cart");

route.use("/", routeUser);
route.use("/product", routeProduct);
route.use("/cart", routeCart);

module.exports = route;
