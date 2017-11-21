import React from 'react';
import { Switch, Route } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Settings from './Settings';
import NotFound from './NotFound';
import './app.css';


const App = props => (
  <div id="app">
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/settings' component={Settings}/>

      <Route exact path='*' component={NotFound} />
    </Switch>
    <Footer />
  </div>
);


export default App;