import './App.css'
import Card from './components/card.jsx'


function App() {
  let myObj={username:"Sabir",age:20};
  let newArr=[1,2,3];

  return (
    <>
      <h1 className="bg-green-500 rounded-xl text-black p-4 mb-4">
        Tailwind test
      </h1>
      <Card username="chaiaurcode" btnText="Learn More" />
      <Card username="hitesh" btnText="Watch" />
    </>
  )
}

export default App
