import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState:{
    page:0,
    pokemons:[],
    isLoading:false,
    },
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state,action)=>{
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
}            
}});


//action creators are generate for each case dreducer function
export const {startLoadingPokemons,setPokemons} = pokemonSlice.actions;