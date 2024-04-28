import { useGetPokemonByIdQuery } from '../redux/createApi'
import { firstWordCapital } from '../helper/helper'

export const PokemonDetail = ({id,} : {id: number}) => {
  const { isLoading, data } = useGetPokemonByIdQuery(id)
  return (  
    <main className='container main-pokemon'>
            <h1>Pokémon Detail</h1>
     {isLoading ? (
        <div className="container-loader">
        <span>Loading..</span>
        </div>
     ) : 
      (
        <>
        <div className='header-main-pokemon'>
            <span className='number-pokemon'>#{data.id}</span>
            <div className='container-img-pokemon'>
                <img
                    src={data.sprites.other.dream_world.front_default}
                    alt={`Pokemon ${data?.name}`}
                />
            </div>

            <div className='container-info-pokemon'>
                <h1>{firstWordCapital(data.name)}</h1>
                <div className='card-types info-pokemon-type'>
                    {data?.types?.map((type: { type: { name: string } }) => (
                        <span key={type?.type?.name} className={`${type?.type?.name}`}>
                            {type?.type?.name}
                        </span>
                    ))}
                </div>
                <div className='info-pokemon'>
                    <div className='group-info'>
                        <p>Altura</p>
                        <span>{data.height}</span>
                    </div>
                    <div className='group-info'>
                        <p>Peso</p>
                        <span>{data.weight}KG</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-stats'>
            <h1>Statistics</h1>
            <div className='stats'>
                <div className='stat-group'>
                    <span>Hp</span>
                    <div className='progress-bar'><div className='inner-progress-bar' style={{ width: `${data.stats[0].base_stat}%` }} ></div></div>
                    <span className='counter-stat'>
                        {data.stats[0].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Attack</span>
                    <div className='progress-bar'><div className='inner-progress-bar' style={{ width: `${data.stats[1].base_stat}%` }} ></div></div>
                    <span className='counter-stat'>
                        {data.stats[1].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Defense</span>
                    <div className='progress-bar'><div className='inner-progress-bar' style={{ width: `${data.stats[2].base_stat}%` }} ></div></div>
                    <span className='counter-stat'>
                        {data.stats[2].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Special Attack</span>
                    <div className='progress-bar'><div className='inner-progress-bar' style={{ width: `${data.stats[3].base_stat}%` }} ></div></div>
                    <span className='counter-stat'>
                        {data.stats[3].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Special Defense</span>
                    <div className='progress-bar'><div className='inner-progress-bar' style={{ width: `${data.stats[4].base_stat}%` }} ></div></div>
                    <span className='counter-stat'>
                        {data.stats[4].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Speed</span>
                    <div className='progress-bar'><div className='inner-progress-bar' style={{ width: `${data.stats[5].base_stat}%` }} ></div></div>
                    <span className='counter-stat'>
                        {data.stats[5].base_stat}
                    </span>
                </div>
            </div>
        </div>
    </>
      )}
      </main>
  )
}
