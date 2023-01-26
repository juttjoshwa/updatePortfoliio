import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from './Componets/contact/Contact.js';
import ThankYou from './Componets/contact/ThankYou.js';
import Footer from './Componets/footer/Footer.js';
import AdminHome from './Componets/Home/AdminHome.js';
import AuthPage from './Componets/Home/AuthPage.js';
import Home from './Componets/Home/Home.js'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/Admin' element={<AdminHome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/email' element={<Footer />} />
          <Route path='/thanks' element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
