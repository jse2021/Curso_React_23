import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'
import { todosApi } from './apis/todosApi'
counterSlice
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons:pokemonSlice.reducer,
    // es el espacio en el cual coloco los resultados producto de los query que disparo de aca
    [todosApi.reducerPath]: todosApi.reducer,
  },
  // el middleware es una funcion que se ejecuta antes que otra
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})