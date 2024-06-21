import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './Comp/Addcoffee.jsx';
import Updatecoffee from './Comp/Updatecoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path:'/addcoffee',
    element:<Addcoffee></Addcoffee>

  },
  {
    path:'/updatecoffee',
    element:<Updatecoffee></Updatecoffee>
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
