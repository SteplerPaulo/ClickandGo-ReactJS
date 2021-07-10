import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        padding: theme.spacing(3, 2),
        marginTop: 'auto',

    },
    textMuted: {
        fontSize: '0.9rem',
        color: 'gray'
    }

}));

export default function Footer(props) {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Grid container >
                <Grid item lg={11} >
                    <Typography className={classes.textMuted}>
                        Click & Go Copyright © 2020 | Design & Develop by Paulo Biscocho
                    </Typography>
                </Grid>
                
                <Grid item lg  >
                    <Link to="/admin" align="right" >
                       Dashboard
                    </Link>
                </Grid>
            </Grid>
        </footer>
    );
}