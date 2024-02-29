import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>res.json())
    //     .then((data)=>{setData(data)})

    // },[])

   const data= useLoaderData()
    
  return (
    <div className='flex text-center bg-sky-600 m-4 text-center p-4 rounded-lg hover:bg-gray-700'>
        <img className='' src={data.avatar_url} alt="" srcset=""width ={300} />
        <h1 className='text-center w-full text-5xl flex justify-center items-center	'> Github follower: {data.followers}</h1> 
        </div>
  )
}

export default Github;

export const  Githubloader=async ()=>{
   const res=await fetch('https://api.github.com/users/hiteshchoudhary')
   return res.json();

}