const {response} = require('express');
const jwt = require('jsonwebtoken')

const validarJWT = (req, res=response, next) => {

//x-token headers
    const token = req.header('x-token');//x-token: ver postman "headers"

    //VALIDAR
    if (!token) {
        return res.status(401).json({
            ok:false,
            msg: "No hya Token en peticion"
        })
    }

    try {

        //VERIFICACION TOKEN
        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid;
        req.name = name;
console.log(token);
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "token no valido"
        })
    }
    
    
    next();


}

module.exports = {
    validarJWT
}