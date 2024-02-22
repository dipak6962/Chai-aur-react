
import './App.css'
import Card from './components/Card'

function App() {
  
 let myObj={
  name:'hitesh',
  platform:'youtube'
 }
 let arrOne=[1,2,3];
  return (
    <>
      <h1 className='bg-green-200 text-black p-4 '>Tailwind CSS</h1>
      <Card username='chai aur code' newObj={myObj} newArr={arrOne} btnText='click Me'/>
      <Card/>
    </>
  )
}

export default App
