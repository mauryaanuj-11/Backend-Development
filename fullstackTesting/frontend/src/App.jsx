import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes , setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => setJokes(response.data))
    .catch((error) => console.log(error));
  },[])

  return (
    <>
      <div>
        <h1>I create a some jokes for you!</h1>
        <h2>Alright! I have {jokes.length} jokes only!</h2 ><br />
        {jokes.map((joke) => (
          <div>
            <h3 key={joke.index}>{joke.type}</h3>
            <div>{joke.content}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
