import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";


const GET_POKEMON_INFO = gql`
{
    pokemons(first: 150) {
      id
      number
      name,
      image,
      evolutions {
        id,
        number,
        name,
        image
      }
    }
  }
`
function App() {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <React.Fragment>
      <h1>
        Pokémons
  
</h1>

      <p>
        <a href="https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon">The Pokémon franchise</a> revolves around 832 fictional species of collectible monsters, each having unique designs and skills. Conceived by Satoshi Tajiri in early 1989, Pokémon are creatures that inhabit the fictional Pokémon World.
        This is the list of the first 150 Pokémon as they appear in Pokémon Stadium, starting with Bulbasaur in the top left corner and ending with Mewtwo in the bottom right corner.
        
</p>
      <div className="container">

        {data && data.pokemons &&
          data.pokemons.map((pokemon, index) => (

            <div key={index} className="card">

              <img src={pokemon.image} />
              <div class="card-body">
                <h3>{pokemon.name}</h3>
                <p>
                  {pokemon.evolutions && (pokemon.evolutions.length !== 0) && <p> Evolutions:
          
{pokemon.evolutions.map((e, indx) => {

                      return <p key={indx}> {e.name} </p>
                    })}
                  </p>}



                </p>
              </div>
            </div>

          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
