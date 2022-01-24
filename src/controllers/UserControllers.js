const bcrypt = require("bcrypt");
const {User} = require('../db');

const createUser = async (req, res) => {
    const {fullname, password, email} = req.body;
    if(req.user.rol !== "ADMIN"){
        return res.status(400).send({message:"You are not authorized to create worker users"})
    }
    try {
        const hashPassword = await bcrypt.hash(password, 8); 
        console.log(hashPassword)
        const user = await User.create({
            fullname, password: hashPassword, email, rol: "WORKER"
        })
        const addCategories = await user.addCategories([1,2,3]);

        res.send({message: "User created successfully", content: user});
    } catch (error) {
        res.status(400).send({message:"User created faild", error})
    }
}

module.exports = {
    createUser
}