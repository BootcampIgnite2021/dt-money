import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

import { dataTransactions } from './data/dataTransactions';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return dataTransactions;
    })
  }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

