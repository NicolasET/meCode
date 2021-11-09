const { response } = require('express');
const bcrypt = require('bcryptjs');
const usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, resp = response) => {

    const { email, password } = req.body;

    try {

        let user = await usuario.findOne({ email });

        if (user) {
            return resp.status(400).json({
                ok: false,
                msg: 'ya existe un usuario registrado con este email'
            });
        }

        user = new usuario(req.body);

        /**Encriptando contraseña */
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        resp.status(201).json({
            ok: true,
            msg: 'Usuario creado de manera exitosa',
            uid: user.id,
            nombre: user.nombre
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al guardar el registro',
        });

    }
}

const loginUsuario = async (req, resp = response) => {

    const { email, password } = req.body;

    try {

        /**Confirmar email */
        let user = await usuario.findOne({ email });

        if (!user) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Confirmar email */

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Generar Token */
        const token = await generarJWT(user.id, user.nombre);

        resp.json({
            ok: true,
            msg: 'Ok',
            uid: user.id,
            name: user.nombre,
            token
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error al autenticar',
        });
    }
}

const revalidateToken = async (req, res = response) => {
    const  {uid, nombre} = req;

    const token = await generarJWT(uid, nombre);

    res.status(200).json({
        token: token
    });
}
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidateToken
};