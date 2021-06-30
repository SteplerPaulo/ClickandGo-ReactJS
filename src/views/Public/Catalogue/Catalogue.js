import React, { useState, useEffect } from "react";
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import ItemList from 'components/Catalogue/Items.js'
import Carousel from 'components/Carousel/Carousel.js'


require('dotenv').config()

console.log(process.env.REACT_APP_API_URL)

export default function Catalogue() {
    const [url] = useState(`${process.env.REACT_APP_API_URL}products/all`);
    const [items, setItems] = useState([]);

    var banners = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]


    useEffect(() => {
        const response = async () => {
            const { data } = await axios(url);
            console.log(data)
            setItems(data);
        }
        response();
    }, [url]);

    return (
        <div><br />
            <Grid container spacing={3}>

                <Carousel/>

            </Grid>
            <Grid container spacing={3}>
                {items.map((item) => (
                    <ItemList key={item.product_id} item={item} />
                ))}
            </Grid>
        </div>
    )
}

