const {response} =require('express');
const Evento = require('../models/Evento')

const getEventos = async (req, res = response)=> {

    //* Populate: para traer datos mas especifico.
    const eventos = await Evento.find().populate('user','name');

    res.json({
        ok: true,
        eventos
    })
}

const crearEvento = async(req, res = response)=> {
    const evento = new Evento(req.body);

    try {

        evento.user = req.uid;//traigo el id del usuario.
        const eventoGuardado = await evento.save();
        res.json({
            ok:true,
            evento: eventoGuardado
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}


const actualizarEvento = async (req, res = response)=> {

    /**
     * OBTENER EL ID DEL PARAMETRO DE URL
     */
    const eventoId = req.params.id;
    const uid = req.uid;
    try {
        // VERIFICAR QUE EXISTA EN BD
        const evento = await Evento.findById(eventoId);

        if (!evento) {
           return res.status(404).json({
                ok:false,
                msg:"Evento no existe con ese id"
            })
        }
            // solo puede modifcarla el que la creo
            if (evento.user.toString() !== uid) {
                return res.status(401).json({
                    ok: false,
                    msg: "No tiene privilegio para editar evento"
                });
            }        
            // es la misma persona que creo el evento
            const nuevoEvento = {
                ...req.body,
                user: uid
            }
            const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true});//new:true para que muestre el elemento actualizado en postman
            res.json({
                ok: true,
                evento: eventoActualizado
            })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        });   
    }

}

const eliminarEvento = async(req, res = response)=> {
    /**
     * OBTENER EL ID DEL PARAMETRO DE URL
     */
    const eventoId = req.params.id;
    const uid = req.uid;
    try {
        // VERIFICAR QUE EXISTA EN BD
        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok:false,
                msg:"Evento no existe con ese id"
            })
        }
            // solo puede modifcarla el que la creo
            if (evento.user.toString() !== uid) {
                return res.status(401).json({
                    ok: false,
                    msg: "No tiene privilegio para eliminar evento"
                });
            }        
            await Evento.findByIdAndDelete(eventoId);
            res.json({
                ok: true,
            })
            
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        });   
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}