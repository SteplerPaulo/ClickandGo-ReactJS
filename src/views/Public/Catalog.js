import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import CardItems from 'components/Card/CardItems.js'
import { LoadMore, NoResult, EndOfResult } from 'components/Search/Result.js'

require('dotenv').config()

export default function Catalog(props) {
    
    const search = setQuery(props.location.search)
    const [loading, setLoading] = useState(false)
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
        setPage((page)=> page+1)
        setUrl(baseUrl + `&page=${page+1}`)
    }

    //request items
    useEffect(() => {
        setLoading(true)
        const response = async () => {
            const { data } = await axios(url);
            setTotalPages(data.totalPages)
            setItems((prevItems) =>
                [...new Set([...prevItems, ...data.rows])]
            );
            setLoading(false)
        }
        response();
    }, [url])

    return (
        <Fragment>
            <Container>
                <h1>Search result</h1>
                <Grid container spacing={3}>
                    <CardItems  items={items} />
                </Grid>

                
                {items.length > 0 && totalPages !== page && !loading && <LoadMore loadMore={loadMore} />}
                {items.length > 0 && totalPages === page && !loading && <EndOfResult /> }
                <NoResult loading={loading} length={items.length}/>
            </Container>
        </Fragment>
    )
}
function setQuery(query) {
    return query.split("=")[1]
}
