const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const user = require('./user.js');

const product = require('./product');

const category = require('./category');

const auth = require('./auth.js');

const Bulkcreate = require('./bulkcreate');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', user);
router.use('/auth', auth);
router.use('/category', category);
router.use('/product', product);
router.use('/initialBulckcreate',Bulkcreate)

module.exports = router;
