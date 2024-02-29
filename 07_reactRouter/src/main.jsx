import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/aboutUs/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Github, { Githubloader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
// const router =createBrowserRouter([
//   {
//     path :"/",
//     element:<App />,
//     children :[
//       {
//         path :"",
//         element:<Home />
//       },
//       {
//         path :"about",
//         element:<About />
//       },
//       {
//         path :"contact",
//         element:<Contact />
//       },
//       {
//         path :"github",
//         element:<Github />
//       },
//       {
//         path:'user/:userid',
//         element:<User />
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App />}>
      <Route path="" element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={Githubloader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
