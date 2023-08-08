const mongoose = require('mongoose');


/**
 * PARA EJECUTAR EN EL INDEX DE NODE
 */
const dbConnection = async () => {
    try {
        await mongoose.connect(`${process.env.DB_CNN}`);
        console.log('db online')
    } catch (error) {

        console.log(error);
        throw new Error('Error al inicializar la base de datos')
    }
}
// EXPORTAR
module.exports = {
    dbConnection
}
