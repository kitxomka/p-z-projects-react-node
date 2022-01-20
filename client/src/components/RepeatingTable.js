import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Container, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { requestData }  from '../redux/action';

import './components.css';

function createData(id, price, quantity, sum) {
    return { id, price, quantity, sum };
}


const RepeatingTable = () => {

    const { tableData, isLoading } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestData(tableData));
    },[dispatch])

    console.log('tableData.data',tableData.data)
    const rows = tableData.data
    console.log('rows', rows)

    const rowsHtml = rows?.map(row => {
        return (
            <TableRow key={row.id}>
                <TableCell align="center" component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.price * row.quantity}</TableCell>
            </TableRow>
        )
    }) 

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
                                            <TableCell align="center">ID</TableCell>
                                            <TableCell align="center">Price</TableCell>
                                            <TableCell align="center">Quantity</TableCell>
                                            <TableCell align="center">Sum</TableCell>
                                        </TableRow>
                                    </TableHead>
                                        
                                    <TableBody>
                                        {isLoading && <div className="loading">Data loading...</div>} 
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