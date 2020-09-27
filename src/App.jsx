import { hot } from 'react-hot-loader'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'

const App = () => (
  <div className='App'>
    <Navbar />
    <Home />
    <Footer />
  </div>
)

export default hot(module)(App)
