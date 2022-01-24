const logout =  (req,res) => {
    req.logout();
    res.send({message:"User logout"})
}

module.exports = {
    logout
}

