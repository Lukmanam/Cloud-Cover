import { useState } from 'react'
import './App.css'
import WeatherApp from './Components/WeatherApp/WeatherApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='background'>
    <WeatherApp/> 
    </div>
     
    
      
    </>
  )
}

export default App
