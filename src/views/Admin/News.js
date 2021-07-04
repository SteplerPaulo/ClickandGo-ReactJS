import { React, Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'components/Table/Table.js';

export default function News() {
    const [url] = useState(`${process.env.REACT_APP_API_URL}banners/all`);
    const [items, setItems] = useState([]);
    const headCells = [
        { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
        { id: 'caption', numeric: false, disablePadding: false, label: 'Caption' },
        { id: 'is_active', numeric: true,bollean:true, disablePadding: false, label: 'Status' },
    ];

    useEffect(() => {
        const response = async () => {
            const { data } = await axios(url);
            setItems(data);
        }
        response();
    }, [url]);



    return (
        <Fragment>
            <Table tableName="Banners" rows={items} headCells={headCells} />
        </Fragment>
    )
}
