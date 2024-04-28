export interface Pokemon {
    name: string;
    sprites: {
      front_default: string;
    };
    abilities: {
      ability: {
        name: string;
      };
    }[];
    types: {
      type: {
        name: string;
      };
    }[];
  }

export interface PokemonState {
    pokemons: Pokemon[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  export const initialState: PokemonState = {
    pokemons: [],
    status: 'idle',
    error: null,
  };

  export interface HomePageProps {
    pokemonData: Pokemon[];
    handleLoadMore: () => void;
  }
  