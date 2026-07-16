import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import nebulaImg from './assets/nebula.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={nebulaImg} className="base" style={{ width: "1000px", height: "300px" }} />
        </div>
        <div style={{
          margin: '20px 10px 10px 20px'
        }}>
          <h1>NASA</h1>
          <p>
            NASA (National Aeronautics and Space Administration) is the U.S. government agency responsible for civil space exploration, aeronautics, and aerospace research. They are currently preparing for the Artemis III lunar mission, launching new Earth science satellites, and operating ongoing missions like the James Webb Space Telescope.
          </p>
          <p>
             Established in 1958 amid the Space Race, NASA succeeded the National Advisory Committee for Aeronautics (NACA) to give the U.S. space program a distinct civilian orientation focused on peaceful applications.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
