const {STRING, INTEGER} = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define('category', {
        name: { 
            type: STRING(100), 
            allowNull: false,
        }
    },{ timestamps: false })
}