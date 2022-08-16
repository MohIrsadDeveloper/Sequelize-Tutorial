require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.USER_NAME,
    process.env.USER_PASSWORD,{
        host : process.env.HOST,
        dialect : process.env.DIALECT,
    }
);
try {
    sequelize.authenticate();
    console.log("Database Connected...");
} catch (error) {
    console.log("Something Error", error);
};

module.exports = sequelize;