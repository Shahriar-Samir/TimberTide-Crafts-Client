import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login.jsx'
import Register from './components/register.jsx'
import AllArts from './components/allArts.jsx'
import AddItem from './components/addItem.jsx'
import MyArtsAndCrafts from './components/allArts.jsx'
import AuthProvider from './providers/authProvider.jsx'
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/home.jsx'
import PrivateRoute from './providers/privateRoute.jsx'
import Errorpage from './components/errorpage.jsx'

const router = createBrowserRouter([{
    path:'/',
    element: <App/>,
    errorElement: <Errorpage/>,
    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/signup',
        element: <Register/>
      },
      
      {
        path:'/allArtsAndCrafts',
        element: <AllArts/>
      },

      {
        path:'/addCraftItem',
        element: <PrivateRoute><AddItem/></PrivateRoute>
      },

      {
        path:'/myArtsAndCrafts',
        element: <PrivateRoute><MyArtsAndCrafts/></PrivateRoute>
      },
      
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
