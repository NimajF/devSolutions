import { useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TitleDiv from './components/TitleDiv'
import HomeContainer from './components/HomeContainer'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <TitleDiv/>
      <HomeContainer/>
      <Footer/>
    </div>
  )
}

export default App
