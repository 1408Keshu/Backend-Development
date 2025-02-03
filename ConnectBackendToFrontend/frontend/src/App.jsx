import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  // const [count, setCount] = useState(0)
  const [jokes,setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    }
  )
  })


  return (
    <>
      <h1>Keshu ji</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke,index) =>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.Content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
