import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addvalue=()=>{
    if(counter>=20){
      return;
    }
    console.log("Clicked", counter);
    counter=counter+1;
    setCounter(counter);
    console.log("Now",counter);
  }

  const removevalue=()=>{
    if(counter<=0){
      return;
    }
    console.log("Clicked", counter);
    counter=counter-1;
    setCounter(counter);
    console.log("Now",counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addvalue}
      >Add value {counter} </button>

      <button
      onClick={removevalue}
      >Remove value {counter} </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
