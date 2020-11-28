import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import GlobalStyle from './GlobalStyle'
import {  BrowserRouter, Switch, Route } from 'react-router-dom'

import AddEvent from './views/AddEvent'
import Home from './views/Home'

import Header from './components/Header/Header'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/AddEvent">
          <AddEvent />
        </Route>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);