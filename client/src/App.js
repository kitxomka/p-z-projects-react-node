import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material/';
import './App.css';

import Header from "./components/Header";
import AppTabs from "./components/AppTabs";

// 1. "Add new line" should be disabled if there is no more items ----------
// 2. Table missing sorting
// 3. There is no reason to have currency column in table, it is the same value that we have on the dropdown ------
// 4. Currency dropdown should be aligned with table left side ----
// 5. Add README.md with explanation about app (How to run), DBs
// 6. Always add ';' at end of line  -----
// 7. "SET_COMMEN" => "SET_COMMENT"  --------
// 8. isError is not used in app but used in redux (shoul remove or implement notification error)  -------------------
// 9. "Youre" => "You're"  -------------
// 10. CONSTANTS.LOAD: I think CONSTANTS.IS_LOADING or CONSTANTS.LOADING is more self explanatory  --------------
// 11. It is suggested to show some error notification in case of returned error from server in postToServer(...) --------
// 12. Remove unnecessary comments -------------


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
