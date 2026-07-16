import nebulaImg from './assets/nebula.jpg'
import React from 'react';

function FirstPage() {
    return <section id="center">
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
          </section>;
}

export default FirstPage;