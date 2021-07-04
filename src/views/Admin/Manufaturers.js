import { React, Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'components/Table/Table.js'

export default function Products() {
    const [url] = useState(`${process.env.REACT_APP_API_URL}manufacturers/all`);
    const [items, setItems] = useState([]);
    const [tableName] = useState('Manufacturers');
    const headCells = [
        { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
        { id: 'slug', numeric: false, disablePadding: false, label: 'Slug' },
        { id: 'address', numeric: false, disablePadding: false, label: 'Address' }
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
            <Table tableName={tableName} rows={items} headCells={headCells} />
        </Fragment>
    )
}
