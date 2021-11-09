const { response } = require('express');
const jwt = require('jsonwebtoken');

const validationJWT = (req, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: "No se ha proporcionado un token valido"
        })
    }

    try {
        const { uid, nombre } = jwt.verify(
            token, process.env.secretToken
        );

        req.uid = uid;
        req.nombre = nombre

    } catch (error) {
        return res.status(401).json({
            msg: "Token invalido"
        });
    }

    next();
}

module.exports = {
    validationJWT
}