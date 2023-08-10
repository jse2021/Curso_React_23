/**
 * REALIZAR INTERACCIONES CON EL AUTH DEL STORE
 * DE ACA LLEGO AL BACKEND
 */
import {useDispatch, useSelector} from 'react-redux';
import calendarApi from '../../api/calendarApi';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../auth/authSlice';


export const useAuthStore  = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email, password})=>{
        
        dispatch(onChecking());// pone la app en un estado de carga
        try {
            const {data} = await calendarApi.post('/auth',{email, password});
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date', new Date().getTime());//almacena fecha que se creo token
            dispatch(onLogin({name: data.name, uid:data.uid}))
            console.log({data})
           
        } catch ( error) {
            console.log(error);
            dispatch(onLogout('Credenciales Incorrectas'));
            setTimeout(()=>{
                dispatch(clearErrorMessage());
            },10);
        }
    }

// START_REGISTER
 
const startRegister = async({email, password, name})=>{
        
    dispatch(onChecking());// pone la app en un estado de carga
    try {
        const {data} = await calendarApi.post('/auth/new',{email, password, name});
        localStorage.setItem('token',data.token);
        localStorage.setItem('token-init-date', new Date().getTime());//almacena fecha que se creo token
        dispatch(onLogin({name: data.name, uid:data.uid}))
        console.log({data})
       
    } catch ( error) {
        dispatch(onLogout(error.response.data?.msg || '--'));
        setTimeout(()=>{
            dispatch(clearErrorMessage());
        },10);
    }
}

/**
 * VERIFICA EL TOKEN, ESTA FUNCION LA LLAMAMOS AL APPROUTER
 */
const checkAuthToken = async() => {
    const token = localStorage.getItem('token');
    if (!token) return dispatch(onLogout());

    try {
        const {data} = await calendarApi.get('auth/renew');
        localStorage.setItem('token',data.token);//almaceno en localstorage el token
        localStorage.setItem('token-init-date', new Date().getTime());//almacena fecha que se creo token
        dispatch(onLogin({name: data.name, uid:data.uid}))
    } catch (error) {
        localStorage.clear();
        dispatch(onLogout());
        
    }

}

/**
 * CERRAR SESION DE USUARIO
 */

const startLogout =()=>{
    localStorage.clear();
    dispatch(onLogout());
}




    return {
        //* Propiedades
        status, 
        user, 
        errorMessage,
        //*Metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}