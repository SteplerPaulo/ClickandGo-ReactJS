import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardItems from 'components/Card/CardItems.js'
import Carousel from 'components/Carousel/Carousel.js'
import { LoadMore, NoResult, EndOfResult } from 'components/Search/Result.js'

require('dotenv').config()

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [items, setItems] = useState([])

    useEffect(() => {
        setLoading(true)
        const response = async () => {
            const { data } = await axios(`${process.env.REACT_APP_API_URL}products?page=${page}`);
            setTotalPages(data.totalPages)
            setItems((prevItems) =>
                [...new Set([...prevItems, ...data.rows])]
            );
            setLoading(false)
        }
        response();
    }, [page]);

    const loadMore = () => {
        setPage((page)=> page+1)
    }

    return (
        <Fragment>
            <Container>
                <Carousel />
                <h1>Featured Items</h1>
                <Grid container spacing={3}>
                     <CardItems items={items} />
                </Grid>
                {(items.length && (totalPages !== page))? <LoadMore loadMore={loadMore} /> :''}
                {(items.length && (totalPages === page))? <EndOfResult/>:''}
                <NoResult loading={loading} length={items.length}/>
            </Container>
        </Fragment>
    )
}