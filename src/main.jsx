import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className='text-2xl text-red-600'>Hello! This is Idba....</h1>
    <Home></Home>
  </React.StrictMode>,
)
