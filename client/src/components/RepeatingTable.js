import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Container, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Button, TableSortLabel } from '@mui/material';
import { requestData }  from '../redux/action';
import  CurrencyDropDown  from './DropDown';

import './components.css';

const getCurrencyToPrice = (currency, priceInDollar) => {
    if(currency === 'USD') {
        return priceInDollar;
    } else {
        return priceInDollar * 3.14
    };
};

const RepeatingTable = () => {
    const [rowsToShow, setRowsToShow] = useState([]);
    const [index, setIndex] = useState(0);
    const [currency, setCurrency ] = useState('USD');

    const { tableData, isLoading } = useSelector((state) => state);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(requestData(tableData));
    },[dispatch]);
      

    const onAddBtnClick = (event) => {
        if (index < tableData?.data?.length) {
            setRowsToShow([...rowsToShow, tableData?.data[index]]);
            setIndex(index + 1);
          };
    };

    const handleCurrencyChange = (e) => {
        console.log(e.target.value);
        setCurrency(e.target.value);
    };

    const rowsHtml = rowsToShow?.map(item => {

        const DOLLAR_TO_NIS = item.price * 3.14;

        return (
            <TableRow key={item.id}>
                <TableCell align="center" component="th" scope="row">
                    {item.id}
                </TableCell>
                <TableCell align="center">{getCurrencyToPrice(currency, item.price)}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="center">{getCurrencyToPrice(currency, item.price) * item.quantity}</TableCell>
            </TableRow>
        );
    });

    return (
        <Grid container direction='column' spacing={3} className='formGContainer' style={{textAlign: 'center'}}>
            <Grid item>
                <Grid item xs={12} >
                    <Typography variant="h6">
                        Table
                    </Typography>
                </Grid>
                <Grid item xs={2} className='currency'>
                    <CurrencyDropDown handleCurrencyChange={handleCurrencyChange}/>
                </Grid>
                <Grid item xs={12} className='tableItem'>
                    <Container maxWidth="md">
                        <TableContainer component={Paper} className='tableContainer'>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">ID</TableCell>
                                        <TableCell align="center">Price </TableCell>
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
                            { index !== tableData?.data?.length ? 
                                (<Button style={{ marginTop:'2rem'}} variant="text" onClick={onAddBtnClick}>+ Add new line</Button>) : 
                                (<Button disabled style={{ marginTop:'2rem'}} variant="text" onClick={onAddBtnClick}>+ Add new line</Button>)
                            }
                            
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default RepeatingTable;