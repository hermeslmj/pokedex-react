import { Grid } from '@mui/material';
import React from 'react';
import { getImageUrl } from '../../helpers/images'


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
    <Grid container spacing={2} key={id}>
      <Grid item xs={8}>
        {english}
      </Grid>
      <Grid item xs={4}>
        #{id}
      </Grid>
      <Grid item xs={12}>
        {type.map((tp) => {
          return tp
        })}
      </Grid>
      <Grid item xs={12}>
        <img src={getImageUrl(id)} alt=""></img>
      </Grid>
    </Grid>
  
  )
}


export default ListItem;