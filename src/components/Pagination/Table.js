import { React } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';

import EnhancedTableHead from 'components/Pagination/TableHead.js'

import { useStyles } from 'components/Pagination/Style.js';

export default function EnhancedTable(props) {
  const classes = useStyles();
  const { headCells, rows, page, totalItems, handleChangePage, rowsPerPage, handleChangeRowsPerPage } = props

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table>
            <EnhancedTableHead headCells={headCells} classes={classes} />
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}  >
                    {headCells.map((col, key) => (
                      <TableCell
                        key={key} component="th" scope="row"
                        align={(col.numeric ? 'right' : 'left')}
                        className={col.hidden ? classes.hide : ''}
                      >
                        {row[col.id]}
                      </TableCell>
                    ))}

                    <TableCell align="right">
                      <IconButton>
                        <EditIcon color="secondary"  />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })
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

