import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { configureStore } from 'redux';
import weatherDataReducer from './reducers/weatherReducer';
import { BrowserRouter } from 'react-router-dom';
import { configure } from '@testing-library/react';

const container = document.getElementById('root');
const root = createRoot(container);

const store = configureStore({reducer: weatherDataReducer});

// const store = createStore(
//   weatherDataReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);