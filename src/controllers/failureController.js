const failure  = (req,res) =>{
    res.send({message: "The password or email is incorrect", content:[]})
}

module.exports = {
    failure
}