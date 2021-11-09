const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.dbConnect);
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar DB');
    }
}
module.exports = {
    dbConnect
}