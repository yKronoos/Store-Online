import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Card, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const columns = [
    { id: 'id', label: 'Id', align: 'center', },
    { id: 'nameProduct', label: 'Nome do Produto', minWidth: "40%", align: 'center', },
    { id: 'price', label: 'Preço', align: 'center', },
];

function createData(id, nameProduct, price) {
    return { id, nameProduct, price};
}

const rows = [
    createData( 1, 'Produto 1', 'R$ '+ 1.1),
    createData( 2, 'Produto 2', 'R$ '+1.2),
    createData( 3, 'Produto 3', 'R$ '+1.3),
    createData( 4, 'Produto 4', 'R$ '+1.4),
    createData( 5, 'Produto 5', 'R$ '+1.5),
    createData( 6, 'Produto 6', 'R$ '+1.6),
    createData( 7, 'Produto 7', 'R$ '+1.7),
    createData( 8, 'Produto 8', 'R$ '+1.8),
    createData( 9, 'Produto 9', 'R$ '+1.9),
    createData( 10, 'Produto 10', 'R$ '+12.1),
    createData( 11, 'Produto 11', 'R$ '+13.1),
    createData( 12, 'Produto 12', 'R$ '+14.1),
    createData( 13, 'Produto 13', 'R$ '+17.1),
];

export default function ListProduct() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>

            <Card variant="outlined" sx={{ margin: 2 }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: '77vh' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: "15%" }}>
                                    </TableCell>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover key={row.code}>
                                                <TableCell align="center">
                                                    <IconButton aria-label="edit">
                                                        <CreateIcon color='info'/>
                                                    </IconButton>
                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon color='error'/>
                                                    </IconButton>
                                                </TableCell>
                                                {columns.map((column) => {
                                                    const value = row[column.id];

                                                    return (

                                                        <TableCell key={column.id} align={column.align}>
                                                            {value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        labelRowsPerPage="Linhas por página"
                        labelDisplayedRows={
                            ({ from, to, count }) => {
                                return '' + from + '-' + to + ' de ' + count
                            }
                        }
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Card>
        </Box>

    );
}
