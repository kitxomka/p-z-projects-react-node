import React, {useState} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Container, TextField, Button, InputLabel, CircularProgress } from '@mui/material/';
import CONSTANTS from '../redux/constants';

import './components.css';

const URL = 'http://localhost:4000';

const Form = () => {

    const { creatorName, comment, date } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        dispatch({
            type: CONSTANTS.SET_CREATOR_NAME,
            payload: e.target.value 
        });
    };

    const handleCommentChange = (e) => {
        dispatch({
            type: CONSTANTS.SET_COMMENT,
            payload: e.target.value 
        });
    };

    const resetForm = () => {
        dispatch({
            type: CONSTANTS.RESET_FORM, 
        });
    };

    const postToServer = () => {
        const newComment = {
            creatorName,
            comment,
            date
        };
        axios 
            .post(URL, newComment)
            .then(() => console.log('Comment created'))
            .catch(err => {
                console.log(err, "There appears some error");
        });
    };

    //saving data in db
    const saveComment = (e) => {
        e.preventDefault();
        if(creatorName.length === 0 || comment.length === 0 ){
            alert('All fields are required!');
        } else {
            alert("You're comment has been saved");
        };
        console.log(creatorName, comment, date);
        postToServer();
        resetForm();
    };

    return (
        <Grid container direction='column' spacing={3} className='formGContainer' style={{textAlign: 'center'}}>
            <Grid item>
                <Typography variant="h6">
                    Comments
                </Typography>
                <Grid item xs={12} className='formItem'>
                    <Container maxWidth="md">
                        <form>
                            <Grid container className='fieldContainer' spacing={2}>
                                <Grid item xs={6}>
                                    <InputLabel className='label' htmlFor="component-helper">Creator Name:</InputLabel>
                                    <TextField required fullWidth 
                                        className="textField"
                                        margin="normal"
                                        id="outlined-basic"
                                        variant="outlined"
                                        value={creatorName || ''}
                                        onChange={handleNameChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel className='label' htmlFor="component-helper">Date:</InputLabel>
                                    <TextField  fullWidth disabled
                                        className="textField"
                                        margin="normal"
                                        label= {date}
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container className='fieldContainer' spacing={2}>
                                <Grid item xs={12}>
                                    <InputLabel className='label' htmlFor="component-helper">Comment:</InputLabel>
                                    <TextField required multiline fullWidth 
                                        className="textField"
                                        margin="normal"
                                        id="outlined-multiline-static"
                                        variant="outlined"
                                        rows={3}
                                        value={comment || ''}
                                        onChange={handleCommentChange}
                                    />
                                </Grid>
                            </Grid>
                            <Grid containet xs={12}>
                                <Button disableElevation
                                    className=''
                                    variant="contained"
                                    color="primary"
                                    className='btn'
                                    onClick={saveComment}
                                >
                                    Save Comment
                                </Button>
                            </Grid>
                        </form>
                    </Container>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Form;