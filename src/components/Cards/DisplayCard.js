import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../assets/images/nguoi-nhen-tro-ve-nha-2017-8524.jpg'
import './DisplayCard.scss'

function DisplayCard() {
    return (
        <div>
            <Card sx={{ width: 200 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt="img-film"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Spider Man
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default DisplayCard