import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

// import { Mongoose } from 'mongoose';

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
// const url = 'mongodb://Sadbern@localhost:3000/dbtest';
// Use connect method to connect to the Server
// MongoClient.connect(url, function (err, client) {
//   assert.equal(null, err);
//   client.close();
// });

//mongoose.connect('mongodb://localhost:27017');
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
