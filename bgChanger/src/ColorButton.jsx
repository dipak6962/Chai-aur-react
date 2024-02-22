import './App.css'
import { useState } from 'react'

import React from 'react'
import ReactDOM from 'react-dom/client'

function ColorButton(props) {
  
    console.log(props);
    let clicked=((e)=> {
        console.log(e.target.innerHTML);
       let body=document.querySelector('#body').style={backgroundColor:color}
    })
    return(
        <>
        <button className="cbutton" onClick={clicked}>{props.username}</button>

        </>
    )
}

export default ColorButton
