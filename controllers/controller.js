const {getProducts, getBrandAgg} = require("../models/models");
const {getBrandsProducts} = require("../helpers/productsByBrand");

exports.getProductsByBrand = async (req, res) => {
    
    let brandAggList = await getBrandAgg();
    let products = await getProducts();

    products = getBrandsProducts(products, brandAggList);

    res.status(200).json({
        status: "success",
        data: {
            result_count: products.length,
            result: products,
        }
    })
}