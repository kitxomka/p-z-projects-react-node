import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Button, TextField  } from '@mui/material';
import CONSTANTS from '../redux/constants';

import './components.css';

const RepeatingTable = () => {

    const [counter, setCouner] = useState(2);

    // brings the needed objects from from the state
    const { price, quantity, newRow } = useSelector((state) => state);
    const dispatch = useDispatch();


    /**
     * @param {*} e 
     * dispatch on "SET_PRICE" action
     * updates state on price field change
     * and passing the value and id of specific row
     */
    const handlePriceChange = (e) => {
        const id = e.target.id;
        const value= e.target.value;
        dispatch({
            type: CONSTANTS.SET_PRICE,
            payload: {value, id}
        });
    };

     /**
     * @param {*} e 
     * dispatch on "SET_QUANTITY" action
     * updates state on quantity field change
     * and passing the value and id of specific row
     */
    const handleQuantityChange = (e) => {
        const id = e.target.id;
        const value= e.target.value;
        dispatch({
            type: CONSTANTS.SET_QUANTITY,
            payload: {value, id} 
        });
    };

    // "SET_NEW_ROW" onClick on the "Add new line" sets new row on the table with new Id
    /**
     * @param {*} event 
     * dispatch on "SET_NEW_ROW" action
     * onClick on the "Add new line" sets new row on the table with new Id
     */
    const onAddBtnClick = (event) => {
        dispatch({
            type: CONSTANTS.SET_NEW_ROW,
            payload: counter,
        });
        setCouner(counter + 1);
    };


    const newRowHtml = newRow.map(item => {
        return (
            <TableRow>
                <TableCell align="center" style={{width: '10rem'}}>{item.id}</TableCell>
                <TableCell align="center" style={{width: '15rem'}}>
                    <TextField 
                        id={item.id}
                        variant="standard" 
                        value={item.price}
                        onChange={handlePriceChange}
                        type="number"
                        style={{width: '50%'}} 
                    />
                </TableCell>
                <TableCell align="center" style={{width: '15rem'}}>
                    <TextField 
                        id={item.id}
                        variant="standard" 
                        value={item.quantity}
                        onChange={handleQuantityChange}
                        type="number"
                        style={{width: '50%'}} 
                    />
                </TableCell>
            <TableCell align="center" style={{width: '10rem'}}>{item.sum}</TableCell>
        </TableRow>
        );
    });

    return (
        <Grid container direction='column' spacing={2} className='formGContainer' style={{textAlign: 'center'}}>
            <Grid item >
                <Grid item xs={12} className='tableItem'>
                    <Container maxWidth="md">
                        <TableContainer component={Paper} className='tableContainer'>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Num</TableCell>
                                        <TableCell align="center">Price </TableCell>
                                        <TableCell align="center">Quantity</TableCell>
                                        <TableCell align="center">Sum</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {newRowHtml}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid item xs={3}>
                            <Button style={{ marginTop:'2rem'}} variant="text" onClick={onAddBtnClick}>+ Add new line</Button>   
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default RepeatingTable;