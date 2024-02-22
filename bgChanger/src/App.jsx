import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ColorButton from './ColorButton'
function App() {
  
  
  const [color, setColor] = useState('olive')
  return (
    <>
    {/* <div></div> */}
    <div className='w-full h-screen duration-200' id='body' style={{backgroundColor:color}}>
      <h1>ChangeBG</h1>
    <div id='divBox' className='border-4 border-indigo-500/100 rounded-full m-1 p-1 bg-black-500'  >
        <button className='border-4 border-indigo-500/100 rounded-full m-1 p-1 bg-yellow-500' style={{}} onClick={()=>{
          setColor("yellow");
        }}>Yellow</button>
        <button className='border-4 border-indigo-500/100 rounded-full m-1 p-1 bg-blue-500' onClick={()=>{
          setColor("blue");
        }}>Blue</button>
        <button className='border-4 border-indigo-500/100 rounded-full m-1 p-1 bg-green-500' onClick={()=>{
          setColor("green");
        }}>Green</button>
        <button className='border-4 border-indigo-500/100 rounded-full m-1 p-1 bg-red-500' onClick={()=>{
          setColor("red");
        }}>red</button>
      </div>
    </div>
      
    </>
  )
}

export default App
