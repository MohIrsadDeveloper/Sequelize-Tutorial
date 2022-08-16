const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./models/dbConfig");
const User = require("./models/user");
const router = require("./routes/router")

// Middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json());

// User.sync(); // It create Table if not exist otherwise not created
// User.sync({ force: true }); // first drop table if exist and then create table
// User.sync({ alter: true }); // Check neccessary and then update all column


app.use("/", router);
app.get("/home", (req,res) => {
    res.send("HOME")
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});