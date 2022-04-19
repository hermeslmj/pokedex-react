import React from 'react';


const ListItem = (props) => {
  const {
    id, 
    name: {
      english
    },
    type,
    base
  } = props.pokemon;
  return (
    <div className="ListItem" key={id}>
      {id} - {english} - {type} - {base.HP}
    </div>
  )
}


export default ListItem;