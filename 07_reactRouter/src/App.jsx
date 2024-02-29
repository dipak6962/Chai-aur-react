import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Outlet />
   <Footer />
   </>
  )
}

export default App
