import * as React from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/material';



function CartCard({item}) {


    return (<>
        <Box>
            <Grid container spacing={2} sx={{paddingLeft:0}}>
                <Grid item md={3}>
                    <img
                        src={item.imageUrl}
                        alt="Item"
                        style={{ height: 65, width: 65 }}
                    />
                </Grid>
                <Grid item md={9} container alignItems="center" direction="column">
                    <Grid item sx={{marginLeft:3,marginTop:-2}}>
                        <h4 >{item.name}</h4>
                    </Grid>
                    <Grid item sx={{marginLeft:3,marginTop:-5}}>
                        <h4 >{item.quantity} X {item.price}$</h4>
                    </Grid>

                </Grid>
            </Grid>
        </Box>

    </>);
}

export default CartCard;