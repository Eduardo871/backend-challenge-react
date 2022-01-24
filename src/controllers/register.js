const bcrypt = require("bcrypt");
const {User} = require('../db');

const register = async (req, res) => {
    const {email, password, fullname} = req.body; 
    try {
        let encryptPassword = await bcrypt.hash(password, 8);
        const user = await User
        .create({email, password: encryptPassword, fullname, rol:"ADMIN"});
        const addCategories = await user.addCategories([1,2,3,4,5,6]);
        
        res.send({message:"Register admin succesfully", content: {user, addCategories}});
    } catch (error) {
        res.status(400).send({message: "Register admin faild", content:error})
    }
};

module.exports = {
    register
}