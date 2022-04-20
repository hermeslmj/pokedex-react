import { Container, Grid } from '@mui/material';
import React from 'react';
import ListItem from '../listItem/ListItem';



const List = (props) => {
  const { pokedex } = props;
  return (
    <Container maxWidth={"sm"} className="list">
      <Grid container spacing={2}>
        {pokedex.map((pokemon) => (
          <Grid item xs={12} key={pokemon.id}>
            <ListItem pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
       
    </Container>
  )
}


export default List;



  