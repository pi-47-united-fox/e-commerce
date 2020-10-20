const route = require("express").Router();
const { CartController } = require("../controllers/cartController");
const { authentication } = require("../middleware/auth");

route.use(authentication);
route.get("/", CartController.getAllCart);
route.post("/:productId", CartController.postCart);
route.put("/:id", CartController.putCart);
route.delete("/:id", CartController.deleteCart);

module.exports = route;
