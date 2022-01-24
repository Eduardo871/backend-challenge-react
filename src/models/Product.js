const {STRING, INTEGER} = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define('product', {
        name:{
            type: STRING(100),
            allowNull: false,
        },
        description: {
            type: STRING(500),
            allowNull: false,            
        },
        image: {
            type: STRING(500),
            allowNull: false,
        }
    },{ timestamps: false })
}