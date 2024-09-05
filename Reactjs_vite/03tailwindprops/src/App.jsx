import React from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  let myObj = {
    username : "Swaraj",
    age: 21
  }

  let newArr = [1,2,3,4]
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Hello123" />
      <Card username="Abhishek" btnText="visit me"/>
    </>
  )
}

export default App
