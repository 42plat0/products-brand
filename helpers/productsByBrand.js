const getSortedBrandObj = (brandAggList) => {
    let sortedBrandList = [...brandAggList];

    // Sort by brand name
    sortedBrandList.sort((a, b) => {
        const nameA = a.brand.toUpperCase();
        const nameB = b.brand.toUpperCase();

        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;

        return 0;
    })

    const brandsObj = {};

    // Change list items to objects with name property
    sortedBrandList.forEach((brand) => {
        // Turn list into product obj list
        const updProductList = brand.product_names.map((prodName) => {
            return {name: prodName}
        });
        // Push to return list
        brandsObj[brand.brand] = updProductList;
    });

    return brandsObj;
}

const getBrandsProducts = (products, brandAggList) => {
    const brandsObj = getSortedBrandObj(brandAggList);

    products.forEach((product) => {

        const prodInBrand = {
            id: product.id,
            name: product.name,
            price: product.price,
        };

        if (product.on_sale)
            prodInBrand.event = "ON SALE";
        
        // Select brand by current products brand
        const brand = brandsObj[product.brand];
        brand.forEach((brandProd, index) => {
            // Update matching products object
            if (brandProd.name === product.name)
                brand[index] = prodInBrand;
        })

    })

    return brandsObj;
}

module.exports = {getBrandsProducts};