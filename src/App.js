import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { About } from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Switch>
          <Route path={'/'} component={Main} exact />
          <Route path={'/about'} component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
