import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Books from './pages/Books.jsx'
import Add from './pages/Add.jsx'
import Update from './pages/Update.jsx'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Books />}/>
            <Route path='add' element={<Add />}/>
            <Route path='update/:id' element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
