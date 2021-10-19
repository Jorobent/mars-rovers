import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from './pages/Search';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex justify="start" direction="column" grow={4}>
          <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/search/:rover">
              <Search/>
            </Route>
          </Switch>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
