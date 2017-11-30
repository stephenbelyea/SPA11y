import React, { Component } from 'react';
import axios from 'axios';
import Main from '../components/Main';


const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const getRandomPost = () => (Math.floor(Math.random() * 101));

const fetchPostsList = () => {
  axios.get(baseUrl)
    .then(result => console.log('data', result.data))
    .catch(error => console.log('error', error));
};

const fetchPostItem = () => {
  axios.get(`${baseUrl}/${getRandomPost()}`)
    .then(result => console.log('data', result.data))
    .catch(error => console.log('error', error));
};


class Requests extends Component {
  componentDidMount() {
    fetchPostsList();
    fetchPostItem();
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