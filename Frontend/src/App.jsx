import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'

const App = () => {
  return (
    <>

        {/* Browser Router */}
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App