import React from 'react';
import props from 'prop-types';
import pokedex from '../../helpers/pokemon'



const List = () => {
  return (
    <div className="List">
       {pokedex.map((pokemon) => (
        <div key={pokemon.id}>{pokemon.name.english}</div>
      ))}
    </div>
  )
}


export default List;