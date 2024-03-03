import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Solutions from './Pages/Solutions.tsx'
import Researches from './Pages/Researches.tsx'
import Learn from './Pages/Learn.tsx'
import About from './Pages/About.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/research' element={<Researches />}/>
        <Route path= '/learn' element={<Learn />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
