import { React } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NoResult } from 'components/Search/Result.js'

import { useStyles } from 'components/Pagination/Style.js';

export default function EnhancedTable(props) {
  const classes = useStyles();
  const { headCells, rows, page, totalItems, handleChangePage, rowsPerPage, handleChangeRowsPerPage } = props

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rows.length) ? rows.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}  >
                    {headCells.map((col, key) => (
                      <TableCell
                        key={key} component="th" scope="row"
                        align={(col.numeric ? 'right' : 'left')}
                      >

                        {row[col.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              }) :
                <TableRow>
                  <TableCell colspan={3}>
                    <NoResult />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          align="left"
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalItems}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

