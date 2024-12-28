import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Card } from '@mui/material';

const columns = [
    { id: 'nameProduct', label: 'Produto', minWidth: "30%", align: 'center', },
    { id: 'quantity', label: 'Quantidade', align: 'center', },
    {
        id: 'orderDate',
        label: 'Data do Pedido',
        align: 'center',
    },
    {
        id: 'totalPrice',
        label: 'Total da Compra',
        align: 'center',
    },
    {
        id: 'status',
        label: 'Status do Pedido',
        align: 'center',
        minWidth: "20%",
    },
];

function createData(nameProduct, quantity, orderDate, totalPrice, status) {
    return { nameProduct, quantity, orderDate, totalPrice, status };
}

const rows = [
    createData('Produto 1', 1, new Date().toDateString(), 29, 'Entregue'),
    createData('Produto 2', 1, new Date().toDateString(), 29, 'Em Rota'),
    createData('Produto 3', 12, new Date().toDateString(), 29, 'Entregue'),
    createData('Produto 4', 14, new Date().toDateString(), 29, 'Em Rota'),
    createData('Produto 5', 16, new Date().toDateString(), 29, 'Entregue'),
    createData('Produto 6', 178, new Date().toDateString(), 29, 'Em Rota'),
    createData('Produto 7', 13, new Date().toDateString(), 29, 'Entregue'),
    createData('Produto 8', 1, new Date().toDateString(), 29, 'Em Rota'),
    createData('Produto 9', 1, new Date().toDateString(), 29, 'Em Rota'),
    createData('Produto 10', 1, new Date().toDateString(), 29, 'Em Rota'),
    createData('Produto 11', 1, new Date().toDateString(), 29, 'Entregue'),
    createData('Produto 12', 1, new Date().toDateString(), 29, 'Em Rota'),
];

export default function ListOrder() {
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
            
            <Card variant="outlined" sx={{margin: 2}}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: '77vh' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
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
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
