import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createRoot } from 'react-dom/client';


function Sample() {
  return (
    <>
    <h2>baithe bithaye koi rasta naya sa mile </h2>
    </>
  )
}
const AnotherSample=(
  <h3>aao milo chale ...</h3>
)

const  reactElement=React.createElement(
  'a',
  {href:'google.com'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  <>
  <h1>kya karu</h1>
   <Sample/>
  
  <App/>
  </>
 )




