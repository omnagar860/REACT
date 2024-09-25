import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count = 10;
  let [ count , setCount] = useState(0)


  const addvalue = ()=> {
    if (count <20) {
     return setCount(count +1 )
    }
  };
  const removeValue = ()=> {
    if(count > 0) {
     return  setCount(count - 1)
    }
  }

  return (
    <>
     <h1>React Counter App</h1>
     <h3>Counter Value : {count} </h3>
     <button
     onClick={addvalue}
     >Incrementer</button>
     <br />
     <br />
     <button
     onClick={removeValue}
     >Decrementer</button>
    </>
  )
}

export default App
