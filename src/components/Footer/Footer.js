import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Footer.scss'


const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 1),
    },
}));

function Footer() {
    const content0 = (
        <div className='text'>
            <Link to='/'><img src={logo} alt='logo' height={160} className='img-logo' /></Link>
            {'Marvel Avengers'}
        </div>
    );
    const content1 = (
        <div className='text'>
            {`Follow us`}
            <div className='social'>
                <Stack direction="row" spacing={2}>
                    <FacebookIcon fontSize={'large'} />
                    <InstagramIcon fontSize={'large'} />
                    <TwitterIcon fontSize={'large'} />
                    <GitHubIcon fontSize={'large'} />
                </Stack>
            </div>
            <div style={{marginTop:20}}>
                <Button variant="contained">Join with us</Button>
            </div>
        </div>
    );
    const content2 = (
        <div className='text'>
            {`Informations`}
            <div className='txt'>
                <PhoneEnabledIcon />
                <span>Hotline : 0123456789</span>
            </div>
            <div className='txt'>
                <HomeWorkIcon />
                <span>Address : Viet Nam</span>
            </div>
            <div className='txt'>
                <EmailIcon />
                <span>Email : thanhyou00@gmail.com</span>
            </div>
        </div>
    );
    const content3 = (
        <div className='text'>
            <div>Subscribe</div>
            <input className='input-email' type={'email'} placeholder='Enter email address...' />
            <span><Button variant="contained">Go</Button></span>
        </div>
    );

    return (
        <div className='footer'>
            <Grid container>
                <Grid item xs>
                    {content0}
                </Grid>
                <Grid item xs>
                    {content1}
                </Grid>
                <Grid item xs>
                    {content2}
                </Grid>
                <Grid item xs>
                    {content3}
                </Grid>
            </Grid>
            <span className='copyright'>Copyright © 2021 All Rights Reserved - Marvel Comics | Made With By ❤ thanhyou00 </span>
        </div>
    );
}

export default Footer