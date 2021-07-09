import { React, Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import FloatingButton from 'components/FloatingButton/FloatingButton.js';
import SearchInput from 'components/Search/Input.js';
import Table from 'components/Pagination/Table.js'
import { NoResult } from 'components/Search/Result.js'


export default function Users() {
    const headCells = [
        { id: 'id', numeric: false, disablePadding: false, hidden: true, label: 'ID' },
        { id: 'username', numeric: false, disablePadding: false, hidden: false, label: 'Username' },
        { id: 'first_name', numeric: false, disablePadding: false, hidden: false, label: 'First Name' },
        { id: 'middle_name', numeric: false, disablePadding: false, hidden: false, label: 'Middle Name' },
        { id: 'last_name', numeric: false, disablePadding: false, hidden: false, label: 'Last Name' },
        { id: 'is_admin', numeric: false, disablePadding: false, hidden: false, label: 'Admin' },
    ];
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [baseUrl] = useState(`${process.env.REACT_APP_API_URL}users`)
    const [url, setUrl] = useState(baseUrl + `?size=${size}`);


    const handleChangeSearch = (event) => {
        setQuery(event.target.value)
    }

    const handleSearch = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            setUrl(baseUrl + `?query=${query}&page=1&size=${size}`);
        }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setUrl(baseUrl + `?query=${query}&page=${newPage + 1}&size=${size}`);
    };

    const handleChangeRowsPerPage = (event) => {
        const size = parseInt(event.target.value, 10)
        setSize(size);
        setUrl(baseUrl + `?query=${query}&page=1&size=${size}`);
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
            <FloatingButton />
            
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
                /> :''}
            {(!isLoading && !items.length)?<NoResult />:''}
        </Fragment>
    )
}