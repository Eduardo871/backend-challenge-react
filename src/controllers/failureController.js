const failure  = (req,res) =>{
    res.status(400).send({message: "The password or email is incorrect", content:[]})
}

module.exports = {
    failure
}