
import React, { useCallback } from "react";
import { Fade } from 'react-reveal'
import ReactTyped from 'react-typed'

import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import particlesOptions from "../data/ts-particles.json"
import NextHead from "../components/common/head";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <NextHead />
      <section className='sc-home-cover'>
        <Particles
          id="tsparticles"
          options={particlesOptions}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div className="container mw-md">
          <Fade>
            <div className="banner d-flex justify-content-center align-items-center flex-column">
              <p className="text-center mb-0">
                The website is currently under development. Stay tuned!
              </p>
              <br></br>
              <h1 className="mb-0">FAIZ ADIL KHATAMI</h1>
              <br></br>
              <p>
                <ReactTyped
                  strings={[
                    "Software Engineer",
                    "Front-End Developer",
                    "Gamer ??? :D",
                  ]}
                  typeSpeed={40}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </p>
            </div>
            <div className="start">
              <div className="btn-start">Good things are coming...</div>
            </div>
          </Fade>
        </div>
        <Fade>
          <div className="intro-underlined"></div>
        </Fade>
      </section>
    </>

  )
}


export default Home