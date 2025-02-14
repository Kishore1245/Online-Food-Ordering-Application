import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './State/Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Updated to include React Router future flags */}
      <BrowserRouter
        future={{
          v7_startTransition: true, // Opt-in for v7 transition behavior
          v7_relativeSplatPath: true, // Opt-in for v7 splat path behavior
        }}
      >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
