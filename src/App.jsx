import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Header from './Components/Header'
import Sign from './Components/Sign'
import Home from './Components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<Sign/>} />
      </Routes>
    </BrowserRouter>
    {/* <Header></Header> */}
    {/* <Form></Form> */}

    </>
  )
}

export default App
