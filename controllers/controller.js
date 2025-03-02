const {getProducts, getBrandAgg} = require("../models/models");
const {getBrandsProducts} = require("../helpers/productsByBrand");

exports.getProductsByBrand = async (req, res) => {
    
    let brandAggList = await getBrandAgg();
    let products = await getProducts();

    const brandsObj = getBrandsProducts(products, brandAggList);
    
    if (!Object.keys(brandsObj).length){
        res.status(404).json({
            status: "failed",
            message: "No brands and products were found"
        });
        return;
    }

    res.status(200).json({
        status: "success",
        data: {
            result: brandsObj,
        }
    });
}