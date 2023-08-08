const {response} = require('express');
const bcrypt = require('bcryptjs');
const {validationResult}=require('express-validator');
const Usuario = require('../models/Usuario');
const {generarJWT} =require('../helpers/jwt');

// pagina de stadar de errores: https://www.restapitutorial.com/httpstatuscodes.html
const crearUsuario = async(req,res = response) => {
        /**
         * req.body: trae toda la informacion que llega desde el front
         * findOne: es una función del modelo de Mongoose 
         * que devuelve el primer documento que coincida con la consulta. 
         * */
        const {email, password} = req.body;
        try {
            let usuario = await Usuario.findOne({email});
            if (usuario) {
                return res.status(400).json({
                    ok:false,
                    msg:'Usuario con email existente',
                })    
            }

            usuario = new Usuario(req.body);
            
            //ENCRIPTAR CONTRASEÑA
            const salt = bcrypt.genSaltSync();
            usuario.password = bcrypt.hashSync(password,salt);
            // ALMACENAMOS USUARIO  
            await usuario.save();

            //GENERAR JWT
            const token = await generarJWT(usuario.id, usuario.name)


            res.status(201).json({
            ok:true,
            uid:usuario.id,
            name: usuario.name,
            token
        })
           
            
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok:false,
                msg:"Consulte al administrador"
            })            
        }
}


const loginUsuario = async(req,res = response)=>{
    const {email, password} = req.body;

    try {
        const usuario = await Usuario.findOne({email});
        if (!usuario) {
            return res.status(400).json({
                ok:false,
                msg:'El usuario no existe con ese email',
            })    
        }
        
        /**
         * CONFIRMAR LOS PASSWORD, COMPARA LAS PASSWORD QUE INGRESA POR FRONT Y LA BD. 
         * DEVUELVE TRU O FALSE
         */
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg:"Password incorrecto"
            })           
        }

        //GENERAR JWT
        const token = await generarJWT(usuario.id, usuario.name)

        // SI TODO LO ANTERIOR ES OK, GENERAR NUESTRO JWT
        res.json({
            ok:true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
            console.log(error);
            res.status(500).json({
            ok:false,
            msg:"Consulte al administrador"
        })     
    }
}
 

 const revalidarToken = async(req,res = response)=>{
    const {uid, name} = req;

    // REVALIDAR TOKEN
    const token = await generarJWT(uid, name)
    res.json({
        ok:true,
        uid,
        name,
        token
    })
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};