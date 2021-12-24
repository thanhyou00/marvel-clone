import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img from '../../assets/images/undraw_freelancer_re_irh4.svg'
import './Contact.scss'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Contact() {
    return (
        <div className='contact'>
            <img src={img} alt='banner' height={400} width='100%' />
            <h2 className='title'>Contact with us</h2>
            <Box sx={{ padding: 10, border: 'none' }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            <label>Name</label> <br />
                            <input className='txt-input' type={'text'} placeholder='Enter your name...' />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <label>Email</label> <br />
                            <input className='txt-input' type={'email'} placeholder='Enter your email...' />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <label>Phone</label> <br />
                            <input className='txt-input' type={'text'} placeholder='Enter your phone...' />
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <label>Content</label> <br />
                            <textarea rows={20} cols={155} placeholder='Enter your feedback...' />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <div className='btn-send'>
                <button >SEND CONTACT</button>
            </div>
            <h2 className='title'>My mini map</h2>
            <iframe title='map' src="https://www.google.com/maps/d/u/0/embed?mid=1H_GN1MFq3hUpC56YKKXLB0SNuza_qrqQ&ehbc=2E312F" width="99%" height={500}></iframe>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Contact