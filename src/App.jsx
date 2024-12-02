import React from 'react'
import Navbar from './components/section/Navbar'
import Banner from './components/section/Banner'
import Resume from './components/section/Resume'
import Projects from './components/section/Projects'
import Contact from './components/section/Contact'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App