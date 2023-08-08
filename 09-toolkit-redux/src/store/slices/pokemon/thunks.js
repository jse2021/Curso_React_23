import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

// para traer informacion de los pokemons
startLoadingPokemons

export const getPokemons = (page = 0)=> {
    // ponemos la app en modo carga
    return async(dispatch,getState)=>{
        dispatch(startLoadingPokemons());

        // TODO: realizar peticion http
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`);
        dispatch( setPokemons({pokemons: data.results, page: page + 1}) );

        

    }
}