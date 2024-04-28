import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
        query: (offset:number) => `pokemon/?offset=${offset}&limit=20`,
      }),
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    getPokemonById: builder.query({
        query: (id: number) => `pokemon/${id}`,
      }),
  }),
})

export const { useGetAllPokemonsQuery, useGetPokemonByNameQuery, useGetPokemonByIdQuery } = pokemonApi
