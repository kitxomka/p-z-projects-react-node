import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material/';
import './App.css';

import Header from "./components/Header";
import AppTabs from "./components/AppTabs";

const App = () => {
 
  return (
      <React.Fragment>
        <CssBaseline>
          <Container fixed>
            <Header />
          </Container>
          <Container fixed>
            <AppTabs />
          </Container>
        </CssBaseline>
        </React.Fragment>  
  );
}

export default App;
