import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import NotFound from './NotFound';


const App = props => (
  <div id="app">
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>

      <Route exact path='*' component={NotFound} />
    </Switch>
    <Footer />
  </div>
);


export default App;