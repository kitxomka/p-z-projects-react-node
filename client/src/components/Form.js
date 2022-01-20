import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Container, TextField, Button, InputLabel, CircularProgress } from '@mui/material/';


import './components.css';


const Form = () => {

    // const comment = useSelector(commentSelector);
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        // dispatch(setCreatorName(e.target.value))
    };

    const handleCommentChange = (e) => {
        // dispatch(setComment(e.target.value))
    };

    const handleLoading = () => {
        // dispatch(setLoading())
    };

    // const handleReset = () => {
    //     dispatch(resetForm())
    // };

    //saving data in db
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const saveComment = () => {
        handleLoading();
    }
    return (
        <Grid container direction='column' spacing={3} className='formGContainer' style={{textAlign: 'center'}}>
            <Grid item>
                <Typography variant="h6">
                    Comments
                </Typography>
                <Grid item xs={12} className='formItem'>
                    <Container maxWidth="md">
                        <form onSubmit={handleSubmit}>
                            <Grid container className='fieldContainer' spacing={2}>
                                <Grid item xs={6}>
                                    <InputLabel className='label' htmlFor="component-helper">Creator Name:</InputLabel>
                                    <TextField required fullWidth 
                                        margin="normal"
                                        id="outlined-basic"
                                        variant="outlined"
                                        // value={comment.creatorName || ''}
                                        onChange={handleNameChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel className='label' htmlFor="component-helper">Date:</InputLabel>
                                    <TextField  fullWidth disabled
                                        margin="normal"
                                        // label= {comment.date}
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container className='fieldContainer' spacing={2}>
                                <Grid item xs={12}>
                                    <InputLabel className='label' htmlFor="component-helper">Comment:</InputLabel>
                                    <TextField required multiline fullWidth 
                                        margin="normal"
                                        id="outlined-multiline-static"
                                        variant="outlined"
                                        rows={3}
                                        // value={comment.comment || ''}
                                        onChange={handleCommentChange}
                                    />
                                </Grid>
                            </Grid>
                            <Grid containet xs={12}>
                                <Button disableElevation
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className='btn'
                                    onClick={saveComment}
                                >
                                    {/* {comment.loading ? <CircularProgress style={{ color: 'white' }} size={30} thickness={4} /> : 'Save Comment'} */}
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