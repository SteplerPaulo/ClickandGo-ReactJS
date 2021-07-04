import { React, Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'components/Table/Table.js'

export default function Products() {
    const [url] = useState(`${process.env.REACT_APP_API_URL}users/all`);
    const [items, setItems] = useState([]);
    const [tableName] = useState('Users');
    const headCells = [
        { id: 'username', numeric: false, disablePadding: true, label: 'Username' },
        { id: 'last_name', numeric: false, disablePadding: false, label: 'Last Name' },
        { id: 'first_name', numeric: false, disablePadding: false, label: 'First Name' },
        { id: 'middle_name', numeric: false, disablePadding: false, label: 'Middle Name' },
        { id: 'is_admin', numeric: false, disablePadding: false, label: 'Admin' },
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
