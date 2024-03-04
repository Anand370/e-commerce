import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import LoggedInRoutes from './component/Routes/loggedinRoutes.jsx';

let route = LoggedInRoutes;
let router = createBrowserRouter(route);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
