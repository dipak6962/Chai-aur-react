import { useState } from 'react'
import "./styles.css";
// let counter=15;
let error=document.querySelector('.error')


 

let flag1=false,flag2=false;
 
function App() {

  let [counter,setCounter]=useState(15);

  let addClick=(()=>{
  
     
    if(counter<20){
      error.style.display='none';
      counter=counter+1;
      setCounter(counter)
      console.log(counter);
    }
    else{
      error.style.display='block';
      error.innerHTML="Not possible because counter is less than = 20";
       
    }
  
    // pure Js code
  
    // error.innerHTML=``
    // if(counter<20)
    //   {
    //   counter=counter+1;
    //   let firstchange=document.querySelector('.firstchange')
    //   firstchange.innerHTML=counter;
    //   let secondchange=document.querySelector('.secondchange')
    //   secondchange.innerHTML=counter;
    //   let thirdchange=document.querySelector('.thirdchange')
    //   thirdchange.innerHTML=counter;
    // }
    // else{
    //   error.innerHTML="Not possible because counter is less than = 20";
    // }
  
   })

  function subClick()
  {
   
    if(counter>0){
      error.style.display='none';
      counter=counter-1;
      setCounter(counter)
      console.log(counter);
    }
    else{
      error.innerHTML="Not possible counter is not an negative no."; 
      error.style.display='block';
    }

  //   pure Js code

  // error.innerHTML=``
  // if(counter>0)
  //   {
  //     counter=counter-1;
  //     let firstchange=document.querySelector('.firstchange')
  //     firstchange.innerHTML=counter;
  //     let secondchange=document.querySelector('.secondchange')
  //     secondchange.innerHTML=counter;
  //     let thirdchange=document.querySelector('.thirdchange')
  //     thirdchange.innerHTML=counter;
  //   }
  //   else
  //   {
  //     error.innerHTML="Not possible counter is not an negative no."; 
  //   }
 }

  return (
  <>
 <h1 className="counter">Count is <span class='firstchange'>{counter}</span></h1>
 <div className="error"></div>
  <button id='add' onClick={addClick}> Add <span className="secondchange">{counter}</span></button>
  <button id='substract' onClick={subClick}>Substract <span className="thirdchange">{counter}</span> </button>
  </>
  )
  
}

export default App
