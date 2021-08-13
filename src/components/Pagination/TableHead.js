import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function EnhancedTableHead(props) {
    const { headCells, classes } = props;
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        className={headCell.hidden ? classes.hide : ''}
                    >
                        {headCell.label}
                    </TableCell>
                ))}

                <TableCell align="right" padding="default">
                    Action
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

