/**
 * CRUD DEL BACKEND
 * Event Routes: /api/events
 */
const {Router} =require('express');
const router  = Router();
const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events')
const {validarJWT} = require('../middlewares/validar-jwt');
const {validarCampos} = require('../middlewares/validar-campos')
const {check}=require('express-validator')
const {isDate}=require('../helpers/isDate');

/**
 * cualquier peticion que se encuentre
 *  debajo del use va a tener que utilizar el token
 * el caso de validarJWT
 */


router.use(validarJWT);

//Obtener Eventos
router.get('/',getEventos);

// Crear un evento
router.post('/', 
[
    check('title',' El titulo es obligatorio').not().isEmpty(),
    check('start',' Fecha de inicio es obligatoria').custom(isDate),
    check('end',' Fecha de fin es obligatoria').custom(isDate)
    ,validarCampos
],
crearEvento);

// Actualizar Evento
router.put('/:id',actualizarEvento);

// Borrar Evento
router.delete('/:id',eliminarEvento);

module.exports = router;