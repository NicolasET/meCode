const { Router } = require('express');
const { check } = require('express-validator');
const { validation } = require('../middlewares/validation');
const { crearUsuario, loginUsuario, revalidateToken } = require('../controllers/auth');
const { validationJWT } = require('../middlewares/validationJWT');
const router = Router();


router.post(
    '/new', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
        validation
    ], 
    crearUsuario);

router.post(
    '/', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
        validation
    ],
    loginUsuario);

router.get('/renew', validationJWT, revalidateToken)

// exportar las rutas configuradas
module.exports = router;