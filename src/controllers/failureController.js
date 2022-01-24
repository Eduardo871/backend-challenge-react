const failure  = (req,res) =>{
    res.staus(400).send({message: "The password or email is incorrect", content:[]})
}

module.exports = {
    failure
}