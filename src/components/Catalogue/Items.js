import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Items(props) {
    const classes = useStyles();
    const { item } = props;
    return (
        <Grid item xs={6} sm={3} md={2}>
            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={item.name}
                        image={"/images/products/thumb/large/" + item.product_images[0].img_file}
                        title= {item.name}
                    />
                    <CardContent>
                        <Typography variant="caption" color="textPrimary">
                            {item.name}
                        </Typography>
                        <Typography gutterBottom component="h5" color="secondary">
                            &#8369;{item.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
