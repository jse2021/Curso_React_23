import { types } from "../types/types";



export const authReducer = (state = {},action)=> {

    switch (action.type){
        case types.login: 
            return{
                ...state, // para mantener el estado anterior
                logged: true,
                name: action.payload // los datos del usuario del authPRovider.jsx
            };

        case types.logout: 
            return{
                logged: false,
            };

        default: 
            return state;
    }
}