import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './DisplayCard.scss'

function DisplayCard(props) {
    return (
        <div>
            <Grid item xs >
                <Card sx={{ width: 190 }}>
                    <CardMedia
                        component="img"
                        height="190"
                        image={props.imageUrl}
                        alt="img-film"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/spiderman'><p style={{color:'black', fontWeight:'bold'}}>Detail</p></Link>
                        <Button size="small">
                            <Rating name="size-small" defaultValue={2} size="small" precision={0.5} />
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
}

export default DisplayCard