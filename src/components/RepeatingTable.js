import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Container, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

// import { DataGrid } from '@mui/x-data-grid';
import { setCreatorName, setComment, setLoading, resetForm } from '../redux/newCommentReducer';
import { commentSelector } from '../redux/selectors';

import './components.css';

function createData(id, price, quantity, sum) {
    return { id, price, quantity, sum };
}

const rows = [
    createData(1, 40, 4, 40*4),
    createData(2, 10, 7, 10*7),
    createData(3, 100, 2, 100*2),
  ];

const rowsHtml =  rows.map(row => {
    return (
        <TableRow key={row.id}>
            <TableCell component="th" scope="row">
                {row.id}
            </TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell>{row.sum}</TableCell>
        </TableRow>
    )
    
}) 

const RepeatingTable = () => {
    return (
        <Grid container direction='column' spacing={3} className='formGContainer' style={{textAlign: 'center'}}>
            <Grid item>
                <Typography variant="h6">
                    Table
                </Typography>
                    <Grid item xs={12} className='tableItem'>
                        <Container maxWidth="md">
                            <TableContainer component={Paper} className='tableContainer'>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Quantity</TableCell>
                                            <TableCell>Sum</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rowsHtml}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Grid item xs={2}>
                                <Button style={{color: '#333'}} variant="text">+ Add new line</Button>
                            </Grid>
                        </Container>
                    </Grid>
            </Grid>
        </Grid>
    )
}

export default RepeatingTable;