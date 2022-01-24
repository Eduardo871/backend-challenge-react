const {Category} = require('../db');


const allProduct = async(req, res) => {
    const {idCategory} = req.query;
    try {
        const category = await Category.findByPk(idCategory, {
            include:{
                all: true,
            }
        })

        res.send({message:"fetching products successfuly", content: category.products})
    } catch (error) {
        res.status(400).send({message: "Fetching products faild", content: error})
    }
}

module.exports = {
    allProduct
}