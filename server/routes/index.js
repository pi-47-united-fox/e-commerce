"use strict";

const router = require("express").Router();
const UsersController = require("../controllers/usersController");
const { authentication, authorization } = require("../middlewares/security");
const ProductsController = require("../controllers/productsController");
const BannersController = require("../controllers/bannersController");
const CartController = require("../controllers/cartController");

router.get("/", (req, res) => {
	res.send(`<h1>Hello World</h1>`);
});

router.post("/users/login", UsersController.login);

router.use(authentication);

router.get("/products", ProductsController.getAll);
router.post("/products", authorization, ProductsController.createOne);
router.put("/products/:id", authorization, ProductsController.UpdateOne);
router.delete("/products/:id", authorization, ProductsController.deleteOne);

router.get("/banners", BannersController.getAll);
router.post("/banners", authorization, BannersController.createOne);
router.patch("/banners/:id", authorization, BannersController.changeActive);
router.delete("/banners/:id", authorization, BannersController.deleteOne);

router.get("/cart", CartController.getAllProcessed); // get all still processed order
router.post("/cart", CartController.addOrder); // add product to cart
router.patch("/checkout", CartController.finishOrder); // change all processed cart to finished, lower quantity as well
router.delete("/cart/:id", CartController.deleteOrder); // delete order

router.get("/history", CartController.getAllFinished); // get all past finished transaction

module.exports = router;
