import { Link } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../redux/createApi'

export const PokemonList = ({name} : {name:string}) => {
  const { isLoading, data } = useGetPokemonByNameQuery(name);

  return (  
    <>
     {isLoading ? (
      <div className="container-loader">
      <span>Loading..</span>
      </div>
     ) : 
      (
        <Link to={`/pokemon/${data?.id}`} className='card-pokemon'>
        			<div className='card-img'>
				<img
					src={data?.sprites?.other?.dream_world?.front_default}
					alt={`Pokemon ${data?.species?.name}`}
				/>
			</div>
          <div className='card-info'>
          <span className='pokemon-id'>#° {data?.id}</span>
          <h3>
            {data?.species?.name} {isLoading ? '...' : ''}
          </h3>
			</div>
      </Link>
      )}
      </>
  )
}
