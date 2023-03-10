import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Falcon9 from './Pages/Falcon9/Falcon9';
import FalconHeavy from './Pages/FalconHeavy/FalconHeavy';
import Dragon from './Pages/Dragon/Dragon';
const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/falcon", element: <Falcon9/>},
  {path: "/falconheavy", element: <FalconHeavy/>},
  {path: "/dragon", element: <Dragon/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);


