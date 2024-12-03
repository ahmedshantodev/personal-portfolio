import React from 'react'
import Navbar from './components/section/Navbar'
import Banner from './components/section/Banner'
import Skills from './components/section/Skills'
import Projects from './components/section/Projects'
import Contact from './components/section/Contact'
import Footer from './components/section/Footer'
import Trainings from './components/section/Trainings'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Trainings />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App