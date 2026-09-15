import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import BackToTop from "./components/BackToTop";
import Skills from './components/Skills.jsx'
import Projects from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-20">
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
         <BackToTop />
      </main>
    </div>
  )
}
    

export default App
   
