import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TitleDiv from './components/TitleDiv'
import HomeContainer from './components/HomeContainer'
import './App.css'

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToDiv = (ref) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='App'>
      <Navbar onScroll={scrollToDiv} refs={{
                section1Ref,
                section2Ref,
                section3Ref,
}} />
      <TitleDiv onScroll={scrollToDiv} refs={{section1Ref,section2Ref, section3Ref}}/>
      <HomeContainer refs={{section1Ref,section2Ref, section3Ref}}/>
      <Footer/>
    </div>
  )
}

export default App
