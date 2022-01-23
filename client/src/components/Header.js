import React from 'react';
import { Grid, Typography } from '@mui/material/';

const Header = () => {
    return (
        <Grid container className='headerContainer' style={{backgroundColor: '#333333'}}>
            <Grid item xs={12}>
                <Typography variant="h5" style={{color: 'white', padding: '2rem'}}>
                    P.Z. Projects
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Header;