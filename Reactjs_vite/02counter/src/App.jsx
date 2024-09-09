import { useState } from 'react';
import './App.css'

function App() {

   let [counter, setCounter] = useState(1)

   //let counter = 15;



   const addValue = () => {
     //counter = counter + 1;
     if(counter == 20){
     setCounter(counter)
     }else{
      setCounter(counter + 1)
     }
   }

   const removeValue= () =>{
    if(counter == 0){
    setCounter (counter - 0)
    }else {
      setCounter (counter - 1)
    }
   }
    
  return (
    <>
      <h1>Welcome</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Decrease Value {counter}</button>
      <br/>
      <p>{counter}</p>
    </>
  )
}

export default App
