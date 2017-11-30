import React, { Component } from 'react';
import axios from 'axios';
import Main from '../components/Main';


const fetchSampleResult = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(result => console.log('data', result.data))
    .catch(error => console.log('error', error));
};


class Requests extends Component {
  componentDidMount() {
    fetchSampleResult();
  }

  render() {
    return (
      <Main id="requests">
        <header>
          <h1>Requests</h1>
          <p>External data requests with content updates.</p>
        </header>
        
      </Main>
    );
  }
}


export default Requests;