import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { PokemonList } from './components/PokemonList';
import { PokemonDetail } from './components/PokemonDetail';
import { useGetAllPokemonsQuery } from './redux/createApi';
import { Pokemon, HomePageProps } from './type/types';

export default function App() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const { data } = useGetAllPokemonsQuery(offset);

  useEffect(() => {
    if (data) {
      setPokemonData(prevData => [...prevData, ...data.results]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setOffset(prevOffset => prevOffset + limit);
    setLimit(prevLimit => prevLimit + 20);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage pokemonData={pokemonData} handleLoadMore={handleLoadMore} />} />
        <Route path="pokemon/:id" element={<PokemonDetailRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage({ pokemonData, handleLoadMore }: HomePageProps) {
  return (
    <div>
      <h2>Pokémon list</h2>
      <div className='card-list-pokemon container'>
        {pokemonData.map((pokemon, index) => (
          <PokemonList key={index} name={pokemon.name} />
        ))}
      </div>
      <div className="container-btn-load-more container">
                <button className='btn-load-more' onClick={handleLoadMore}>
                    Load More...
                </button>
            </div>
    </div>
  );
}

function PokemonDetailRoute() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id) : undefined; // Parse id to number only if it's defined
  return <PokemonDetail id={parsedId ?? 1} />; // Provide a default value if parsedId is undefined
}
