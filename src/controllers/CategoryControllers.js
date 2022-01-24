const {User} = require('../db');

const allCategories = async (req, res) => {     
    const {idUser} = req.query;
    try {
        const user = await User.findByPk(idUser, {
            include:{
                all: true,
                attributes:['id', 'name']
            }
        });
        res.send({message:"Fetching categories succesfully", content: user.categories});
    } catch (error) {
        res.status(400).send({message:"Fetching categories faild", content: error})
    }
}

module.exports = {
    allCategories
}