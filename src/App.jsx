import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WeatherApp from './WeatherApp'

function App() {
  
  return (
    <>
    <div style={{
        backgroundImage: "url('https://media.istockphoto.com/id/2222906663/photo/lighthouse-guiding-light-beacon-of-hope-lighthouse-guide-safe-harbor-steady-guidance.webp?a=1&b=1&s=612x612&w=0&k=20&c=aeZzaSwLpoA0wb7RyjsGKwKQZVvf1l98nRFM8spSv6s=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        
      }}>


     <WeatherApp/>
     </div>
     
     
    </>
  )
}

export default App
