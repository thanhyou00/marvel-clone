import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import imgSpiderman from '../../assets/images/nguoi-nhen-tro-ve-nha-2017-8524.jpg'
import './DetailsCard.scss'

function DetailsCard() {

    return (
        <div className='detailsCard'>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: '30%', marginRight: 15 }}
                    image={imgSpiderman}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 15 }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            With Spider-Man's identity now revealed, Peter asks Doctor Strange for help.
                            When a spell goes wrong, dangerous foes from other worlds start to appear, forcing
                            Peter to discover what it truly means to be Spider-Man.
                            With Spider-Man's identity now revealed, Peter asks Doctor Strange for help.
                            When a spell goes wrong, dangerous foes from other worlds start to appear, forcing
                            Peter to discover what it truly means to be Spider-Man.
                            With Spider-Man's identity now revealed, Peter asks Doctor Strange for help.
                            When a spell goes wrong, dangerous foes from other worlds start to appear, forcing
                            Peter to discover what it truly means to be Spider-Man.
                            With Spider-Man's identity now revealed, Peter asks Doctor Strange for help.
                            When a spell goes wrong, dangerous foes from other worlds start to appear, forcing
                            Peter to discover what it truly means to be Spider-Man.
                        </Typography>
                        <br />
                        <Button variant="outlined">Read comic</Button> <br />
                        <Button size="large">
                            <Rating name="size-small" defaultValue={2} size="large" precision={0.5} />
                        </Button>
                    </CardContent>
                </Box>
            </Card>
        </div>
    );
}

export default DetailsCard