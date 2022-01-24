const passportLocal = require('passport-local');
const {User} = require('../db');
const bcrypt = require('bcrypt');
const {compare} = require('bcrypt');

const pasportConfigure = (passport) => {
    passport.use(new passportLocal.Strategy({usernameField: 'email'},
    async (email, password, done) => { 
        try {
            
            // verificar si el usuario está en db
            let user = await  User.findOne({where:{email}});
            
            if(user){
                // compruebo contraseña 
                const comparePassword = await bcrypt.compare(password,user.password);
                console.log(comparePassword)
                if(comparePassword) done(null, user);
                else done(null, false)
            }

        } catch (error) {
            done(null, false);
        }

        
    }))

    passport.serializeUser( async (user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser( async (id, done) => {
        try {
        const user = await User.findByPk(id);
        
        if(user) done(false, user);
        else done(null, false );

       
       } catch (error) {
        done(null, false )
       }
    })

}

module.exports = {
    pasportConfigure 
}