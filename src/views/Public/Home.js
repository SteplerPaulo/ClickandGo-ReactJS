import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import ItemList from 'components/Catalogue/Items.js'
import Carousel from 'components/Carousel/Carousel.js'
require('dotenv').config()

export default function Home() {
    const [page, setPage] = useState(1)
    const [items, setItems] = useState([]);

    useEffect(() => {
        const response = async () => {
            const { data } = await axios(`${process.env.REACT_APP_API_URL}products?page=${page}&size=12`);
            setItems((prevItems) =>
                [...new Set([...prevItems, ...data.rows])]
            );
        }
        response();
    }, [page]);

    const loadMore = () =>{
        let nextPage = page + 1;
        setPage(nextPage)
    }


    return (
        <Fragment>
            <Container>
                <Carousel />
                <h1>Featured Items</h1>
                <Grid container spacing={3}>
                    {items.map((item) => (
                        <ItemList key={item.id} item={item} />
                    ))}
                </Grid>
                <Box textAlign='center' p={3}>
                    <Button onClick={loadMore} variant='contained'>
                        Load More
                    </Button>
                </Box>
            </Container>
        </Fragment>
    )
}

