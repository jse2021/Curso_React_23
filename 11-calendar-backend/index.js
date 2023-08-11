const express = require('express');
require('dotenv').config();// para levantar las variables de entorno configuradas en .env
const {dbConnection}=require('./database/config')
const cors = require('cors')

//crear servidor express
const app = express();


// Directorio publico
app.use(express.static('public'));//funcion que se ejecuta cuando se realiza una peticion

// base de datos
dbConnection();

//cors
app.use(cors());

// LECTURA Y PARSEO DEL BODY
app.use(express.json());

//RUTAS
//todo lo que el archivo vaya a exportar, lo va a habilitar esta ruta ('api/auth'
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//*SI LOS ENLANCES ANTERIORES NO RESPONDENM PASA POR LE INDEX QUE TIENE LA CONFIGURACION DE REACT
app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html');
})



// TODO: auth , crear, login, renew
// TODO: Crud: Eventos

//escuchar peticiones
app.listen(4000,()=>{
    console.log(`servidor corriendo en puerto ${4000}`)
})