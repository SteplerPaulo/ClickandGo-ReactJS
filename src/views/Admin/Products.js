import { React, Fragment, useState, useEffect } from 'react'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import axios from 'axios';

import SearchInput from 'components/Search/Input.js';
import Table from 'components/Pagination/Table.js'
import Sample from 'components/Forms/Sample.js'
import { NoResult } from 'components/Search/Result.js'

import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';


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

const useCreateStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
}));


export default function ProductListings() {
    let { path, url } = useRouteMatch();
    const classes = useStyles();

    return (
        <Fragment>
            < Switch >
                <Route path={`${path}/create`}>
                    <Create />
                </Route>
                <Route path={path}>
                    <Lists />
                </Route>
            </Switch >
            <Link to={`${url}/create`} className={classes.root}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
        </Fragment>
    )
}

function Lists() {
    const headCells = [
        { id: 'id', numeric: false, disablePadding: false, hidden: true, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: false, hidden: false, label: 'Name' },
        { id: 'price', numeric: true, disablePadding: false, hidden: false, label: 'Price' },
        { id: 'category', numeric: false, disablePadding: false, hidden: false, label: 'Category' }
    ];
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [baseUrl] = useState(`${process.env.REACT_APP_API_URL}products`)
    const [url, setUrl] = useState(baseUrl + `?size=${size}`);


    const handleChangeSearch = (event) => {
        setQuery(event.target.value)
    }

    const handleSearch = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            setUrl(baseUrl + `?name=${query}&page=1&size=${size}`);
        }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setUrl(baseUrl + `?name=${query}&page=${newPage + 1}&size=${size}`);
    };

    const handleChangeRowsPerPage = (event) => {
        const size = parseInt(event.target.value, 10)
        setSize(size);
        setUrl(baseUrl + `?name=${query}&page=1&size=${size}`);
    };

    useEffect(() => {
        setIsLoading(true)
        const response = async () => {
            const { data } = await axios(url);
            console.log(data)
            setItems(data.rows);
            setTotalItems(data.totalItems);
            setTotalPages(data.totalPages);
            setIsLoading(false)
        }
        response();
    }, [url]);


    return (
        <Fragment>
            <SearchInput
                items={items}
                handleSearch={handleSearch}
                handleChangeSearch={handleChangeSearch}
            />
            {(items.length) ?
                <Table
                    tableName="Products"
                    rows={items}
                    page={page}
                    headCells={headCells}
                    totalItems={totalItems}
                    totalPages={totalPages}
                    handleChangePage={handleChangePage}
                    rowsPerPage={size}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                /> : ''}
            <NoResult loading={isLoading} length={items.length} />
        </Fragment>
    )
}

function Create() {

    const classes = useCreateStyles();
    return (
        <Paper className={classes.paper}>
            <Grid item lg={12} sm container spacing={2}>
                <Sample />
            </Grid>
        </Paper>
    );
}