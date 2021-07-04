import { React, Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'components/Table/Table.js'

export default function Categories() {
    const [items, setItems] = useState([]);
    const [url] = useState(`${process.env.REACT_APP_API_URL}products/all`);

    const headCells = [
        { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
        { id: 'price', numeric: true, disablePadding: false, label: 'Price' }
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
            <Table
                tableName="Categories"
                rows={items}
                headCells={headCells}
            />
        </Fragment>
    )
}
