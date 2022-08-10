import React from 'react';
import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function Footer(){
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token !== ""){<Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid alignItems="center" item xs={12}>
        <Box className='box1'>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/e-elasGen" rel="noreferrer" target="_blank">
                    <GitHubIcon className='redes'/>
                </a>
                <a href="https://www.instagram.com/maybalbino.ink/" rel="noreferrer" target="_blank">
                    <InstagramIcon className='redes'/>
                </a>
                <a href="https://www.linkedin.com/school/generationbrasil/" rel="noreferrer" target="_blank">
                    <LinkedInIcon className='redes'/>
                </a>
            </Box>
        </Box>
        <Box className='box2'>
            <Box paddingTop={1}>
                <Typography variant="subtitle2" align="center" gutterBottom className='textos'>© 2022 Copyright:</Typography>
            </Box>
            <Box>
                <a target="_blank" href="https://github.com/e-elasGen" rel="noreferrer">
                    <Typography variant="subtitle2" gutterBottom className='textos' align="center">E-lasGen</Typography>
                </a>
            </Box>
        </Box>
    </Grid>
</Grid>

    }
    return(
        <>
            {footerComponent}
        </>

    );
}

export default Footer;