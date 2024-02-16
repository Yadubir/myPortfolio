import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-800 text-white'>
      <Navbar />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
