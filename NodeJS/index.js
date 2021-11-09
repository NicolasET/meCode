/**Llamamos el paquete de express */
const express = require('express');
require('dotenv').config();
const { dbConnect } = require('./database/config');

/**Crear servidor express */
const app = express();

app.use(express.json());

/**Conexion a la base de datos */
dbConnect();

/**Middleware */
app.use(express.static('public'));

app.use('/productos', require('./routes/productos'));
app.use('/auth', require('./routes/auth'));
app.use('/ventas', require('./routes/ventas'));

app.listen(process.env.port, () => {
    console.log(`Server corriendo en puerto ${process.env.port}`);
});



