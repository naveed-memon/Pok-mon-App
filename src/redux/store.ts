import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './createApi'
import { pokemon } from './reducer'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemon.name]: pokemon.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === 'development'
      ? getDefaultMiddleware({
          serializableCheck: false,
        }).concat(pokemonApi.middleware)
      : getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)
