import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed ,setNumber]=useState(false)
  const [charAllowed ,setChar]=useState(false)
  const [Password,setPassword]=useState("s")


  const copyPasswordToClipBoard=useCallback(()=>{
   
      passwordRef.current?.select();
    
        window.navigator.clipboard.writeText(Password)
    },[Password])

      //useRef
      const passwordRef=useRef(null)
  const PasswordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let str1=str.toLowerCase(str);
    str+=str1;
    if(numberAllowed)str+="1234567890"
    if(charAllowed)str+="!@#$%^&*()_+=}{]["
    console.log('Main yaha hoon');
    let l=length;
    while (l>0) {
      let index=(Math.floor(Math.random()*str.length+1))
      console.log(str[index-1]);
      pass+=str[index];
      l--;
    }
    setPassword(pass);
  },[numberAllowed,charAllowed,length,setPassword])

  useEffect(()=>{
    PasswordGenerator();
  },[numberAllowed,charAllowed,length,setPassword,setPassword])
  return (
    <>
    <div className='w-full  max-w-md mx-auto shadow-md rounded-lg my-8 bg-indigo-300'>
    <h1 className='text 5xl text-center text-black-50 pt-3'>Password Generator</h1>
     
     <div className='flex mx-12  items-center'>
     <input
       type="text" 
       value={Password}
       placeholder='Password'
       className='outline-none  border-2 border-indigo-600 mx-0 rounded-sm bg-cyan-100 p-1 placeholder-fuchsia-600 my-6 absolute-bottom-0 '
       readOnly
       ref={passwordRef}
      
       />

       <button 
    className='rounded-sm px-2 outline-none h-8 bg-blue-700 text-black  py-0 shrink-0 my-6'
    onClick={copyPasswordToClipBoard}
    >copy</button>
      </div> 
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input type="range"
       min={6}
       max={20}
       value={length}
       className='cursor-pointer m-2 block'
       onChange={(e)=>{
        setLength(e.target.value)
       }}
       />
        <label htmlFor="">Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          id='numberInput'
          onChange={()=>{
            setNumber((prev)=>!prev)
          }}
           />
          <label htmlFor="">Numbers</label>

           
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          id='charInput'
          onChange={()=>{
            setChar((prev)=>!prev)
          }}
           />
          <label htmlFor="">Chars</label>

           
        </div>
        </div>
    </div>
    
    <button onClick={()=>{
      {setLength(length+1)};
    }} className='m-1 bg-white px-3 py-2 rounded-lg'>{length}</button>
      
    </>
  )
}

export default App
