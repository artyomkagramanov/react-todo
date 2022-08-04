import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'routes';
import { ToastContainer } from 'react-toastify';
import 'assets/css/index.css';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <AppRoutes />
  </React.StrictMode>
);
