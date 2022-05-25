import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/global.css';
import App from './App';
import DataProvider from './redux/store';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      {' '}
      <Router>
        <App />
      </Router>
    </DataProvider>
  </React.StrictMode>,
  container
);

<DataProvider></DataProvider>;
