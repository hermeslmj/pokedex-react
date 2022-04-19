import React from 'react';
import pokedex from '../../helpers/pokemon'
import ListItem from '../listItem/ListItem';



const List = () => {
  return (
    <div className="List">
       {pokedex.map((pokemon) => (
        <ListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}


export default List;