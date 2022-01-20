import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material/';
import './App.css';
import Form from './components/Form';
import RepeatingTable from './components/RepeatingTable';

const App = () => {
 
  

  return (
      <React.Fragment>
        <CssBaseline>
              <Container fixed>
                <Box component="form" sx={{ bgcolor: '#eee', width:'100%', height: 'auto', padding: '2rem' }}> 
                  <Form />
                </Box>
                <hr/>
                <Box sx={{ bgcolor: '#eee', width:'100%', height: 'auto', padding: '2rem' }}> 
                  <RepeatingTable />
                </Box>
            </Container>
        </CssBaseline>
        </React.Fragment>  
  );
}

export default App;
