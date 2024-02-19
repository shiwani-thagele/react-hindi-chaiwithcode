import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(15)

  //let Counter = 15;

  const addValue = ()=>{
    if(Counter < 20)
    Counter = Counter + 1
    setCounter(Counter) 
    console.log("Clicked",Counter);
  }

  const removeValue = ()=>{
    // console.log("clicked",Counter);
    if(Counter > 0)
    Counter =(Counter - 1)
    setCounter(Counter)
  }


  return (
    <>
     <h1>Counter App </h1>
     <h2>Counter Value :{Counter}</h2>

     <button 
     onClick={addValue}
     >Add Value</button>
     <br/>
     <br />
     <button onClick={removeValue}>Remove value</button>

    </>
  )
}


export default App
