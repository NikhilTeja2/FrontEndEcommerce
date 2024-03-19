import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { items } from '../../seed';
import CardMenuItem from '../CardMenuItem';
import { useNavigate } from 'react-router-dom'
const { sections } = items;

function CardMenuTop() {
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10,marginLeft:8,marginRight:8}}>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item md={4} sx={{}}>
          <CardMenuItem item={sections[0]} />
        </Grid>
        <Grid item md={4}>
          <CardMenuItem item={sections[1]} />
        </Grid>
        <Grid item md={4} sx={{}}>
          <CardMenuItem item={sections[2]} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardMenuTop;
