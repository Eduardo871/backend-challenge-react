const {STRING, ENUM} = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define('user', {
        fullname: {
            type: STRING(100),
            allowNull: false,
        },
        email: {
            type: STRING(500),
            allowNull: false,
            unique: true,
            validate:{
                isEmail: {
                    args: true,
                    msg: 'It must be an email'
                }
            }
        }, 
        password: {
            type: STRING,
            allowNull: false,
        },
        rol: {
            type: ENUM('ADMIN', 'WORKER')
        }
    },{ timestamps: false })
}