// componente que sirve para proveer inf a toda la app

import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return{
        logged:!!user,
        user:user, 
    }
}
export const AuthProvider = ({children}) => {

    const login = (name = '') =>{
        const user = {id:'ABC',name:name}
        const action = {
            type:types.login,
            payload:user
        }

        localStorage.setItem('user',JSON.stringify(user));
        dispatch(action);
    }

    

    const [authState,dispatch] = useReducer(authReducer,{},init); 

    return(
        <AuthContext.Provider value={{
            ...authState,
            login:login
        }}>
            {children}
        </AuthContext.Provider>
    )
}