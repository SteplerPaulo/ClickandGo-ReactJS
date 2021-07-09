import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ItemList from 'components/Catalog/Items.js'
import { LoadMore, NoResult, EndOfResult } from 'components/Search/Result.js'

require('dotenv').config()

export default function Catalog(props) {
    
    const search = setQuery(props.location.search)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [items, setItems] = useState([])
    const [baseUrl, setBaseUrl] = useState(`${process.env.REACT_APP_API_URL}products?name=${search}`)
    const [url, setUrl] = useState(`${process.env.REACT_APP_API_URL}products?name=${search}`)

    //set default value on search
    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}products?name=${search}`;
        setUrl(url)
        setBaseUrl(url)
        setItems([])
        setPage(1)
    }, [search]);

    //set url to load more items
    const loadMore = () => {
        let nextPage = page + 1;
        setPage(nextPage)
        setUrl(baseUrl + `&page=${nextPage}`)
    }

    //request items
    useEffect(() => {
        const response = async () => {
            const { data } = await axios(url);
            setTotalPages(data.totalPages)
            setItems((prevItems) =>
                [...new Set([...prevItems, ...data.rows])]
            );
        }
        response();
    }, [url])

    return (
        <Fragment>
            <Container>
                <h1>Search result</h1>
                <Grid container spacing={3}>
                    {items.map((item, index) => (
                        <ItemList key={index} item={item} />
                    ))}
                </Grid>
                {(items.length && (totalPages !== page)) ? <LoadMore loadMore={loadMore} /> : ''}
                {(items.length && (totalPages === page)) ? <EndOfResult /> : ''}
                {(!items.length) ? <NoResult /> : ''}
            </Container>
        </Fragment>
    )
}
function setQuery(query) {
    return query.split("=")[1]
}
