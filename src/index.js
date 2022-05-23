import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Faq from './components/pages/Faq'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="*" element={<App />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/faq" element={<Faq />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
)
