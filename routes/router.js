const router = require("express").Router();

const {getProductsByBrand} = require("../controllers/controller");

router.route("/products").get(getProductsByBrand);

module.exports=router;