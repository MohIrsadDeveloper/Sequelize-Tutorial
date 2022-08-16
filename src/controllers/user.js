const User  = require("../models/user");

const userController = (req,res) => {
    const {username, email, password, confirmPassword} = req.body;
    let userName = User.create({username, email, password, confirmPassword})
    console.log(userName);
    res.json({
        msg : "User Added",
        // data : userName
    })
};

module.exports = {
    userController
}