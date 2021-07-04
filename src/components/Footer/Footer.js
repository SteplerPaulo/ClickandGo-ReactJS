import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
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
                <Grid item lg >
                    <Typography className={classes.textMuted}>
                        Click & Go Copyright © 2020
                    </Typography>
                </Grid>
                <Grid item lg  >
                    <Typography align="right"  className={classes.textMuted}>
                        Design & Develop by Paulo Biscocho
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
}