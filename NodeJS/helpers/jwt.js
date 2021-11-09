const jwt = require('jsonwebtoken');

const generarJWT = (uid, nombre) => {
    return new Promise((resolve, reject)=>{
        const payload = {uid, nombre};

        jwt.sign(payload, process.env.secretToken, {
            expiresIn: '1h'
        }, (error, token) => {
            if(error){
                console.log(error);
                reject("No se pudo generar el token");
            }

            resolve(token);
        })
    });
};

module.exports = {
    generarJWT
}