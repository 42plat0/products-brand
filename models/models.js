const {sql} = require("../db");

exports.getBrandAgg = async() => {
    const brandAggList = await sql `
        SELECT brand, 
               ARRAY_AGG(name) AS product_names
        FROM products
        GROUP BY brand;
    `
    return brandAggList;
}
exports.getProducts = async() => {
    const prods = await sql `
        SELECT * FROM products;
    `
    return prods;
}