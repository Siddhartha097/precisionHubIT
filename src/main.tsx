import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Solutions from './Pages/Solutions.tsx'
<<<<<<< HEAD
import Learn from './Pages/Learn.tsx'
=======
import Researches from './Pages/Researches.tsx'
>>>>>>> 57268dce5d7e48d29cd1218671238c08cc65c6c5

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
<<<<<<< HEAD
        <Route path='/learn' element={<Learn/>} />
=======
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/researches' element={<Researches />}/>
>>>>>>> 57268dce5d7e48d29cd1218671238c08cc65c6c5
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
