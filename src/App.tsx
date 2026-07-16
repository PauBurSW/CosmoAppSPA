import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import FirstPage from './FirstPage'
import nebulaImg from './assets/nebula.jpg'
import BasicPage,{basicPageProps} from './BasicPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const nasaProps:basicPageProps = {
    img:nebulaImg,
    title:"NASA",
    par1:"NASA (National Aeronautics and Space Administration) is the U.S. government agency responsible for civil space exploration, aeronautics, and aerospace research. They are currently preparing for the Artemis III lunar mission, launching new Earth science satellites, and operating ongoing missions like the James Webb Space Telescope.",
    par2:"NASA maintains extensive ground and communications infrastructure, including the Deep Space Network and the Near Earth Network. Its science programs focus on Earth observation through the Earth Observing System, heliophysics research, Solar System exploration with robotic missions such as New Horizons and the Perseverance rover, and astrophysics investigations using space-based observatories including the James Webb Space Telescope and the Hubble Space Telescope. The Launch Services Program oversees launch operations for uncrewed launches."
  }
  return (
    <>
        <BasicPage {...nasaProps}/>
    </>
  )
}

export default App
