import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            position: 'fixed',
            width: 60,
            height: 60,
            bottom: '1rem',
            right: 40,
        },
    },
}));



export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    );
}
