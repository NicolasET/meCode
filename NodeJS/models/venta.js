const { Schema, model } = require('mongoose');


const ventaSchema = Schema({
    idProducto: {
        type: Schema.Types.ObjectId,
        ref: 'producto',
        require: true
    },
    cantidad: {
        type: Number,
        require: true
    },
    valorTotal : {
        type: Number,
        require: true
    },
    vendedor: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        require: true
    },
    fechaVenta: {
        type: Date, 
        default: Date.now()
    },
    idCliente: {
        type: Number,
        require: true
    },
    nombreCliente: {
        type: String,
        require: true
    }
});

module.exports = model('venta', ventaSchema);