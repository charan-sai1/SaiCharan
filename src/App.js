import './App.css';
import Nav from './components/nav';
import TiltedCard from './components/Mecard';
import mecard from './svg/Mecard.svg';
import BlackCrystal from './svg/blackCrystal.png';
import MeMobile from './svg/Mecard-mobile.svg';
import Education from './images/education.png';
import MatrixStripComponent from './components/MatrixStrip';
import Monitior from './svg/monitor.png';
import LapDesc from './components/LapDesc';
import Skills from './components/Skills';
import Hero from './svg/Hero.svg'
import JarvisBtn from "./components/GitBtn";
import DomainP from "./images/domainP.png";
import AI from "./images/Ai.png";
import Carousel from './components/Carousel';
import ScrollVelocity from './components/ScrollVelocity';
import PixelCard from "./components/PixelCard";
import BlurText from './components/BlurText';
import Drone from './components/Drone';
import { motion } from 'framer-motion';
import ScrollReveal from './components/ScrollReveal';
import GlitchText from './components/GlitchText/GlitchText';
import Logos from "./components/LogoComp"
import Particles from "./blocks/Backgrounds/Particles/Particles.jsx";
import React, { useState, useEffect } from 'react';

const logoimages = require.context('./images/logos', false, /\.(png|jpe?g|svg)$/);
const logoList = logoimages.keys().map((key) => logoimages(key));

function PreLoader() {
  return (
    <div className="preloader">
      <div className="spinner"></div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <div className="App">
      <Nav />
      <div className='filler'>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          src={Hero}
          alt="Name"
          className="hero"
        />
      </div>
      <div className='me'>
        <img src={BlackCrystal} alt="Black Crystal" className="blackCrystal" />
        <TiltedCard
          imageSrc={mecard} // Required: Path to your image
          altText="image describiging about sai charan"  // Required: Alt text for accessibility
          captionText="Sai charan" // Optional: Text displayed as a caption
          containerHeight="528px" // Optional: Height of the card container
          containerWidth="846px" // Optional: Width of the card container
          imageHeight="528px" // Optional: Height of the image
          imageWidth="846px" // Optional: Width of the image
          scaleOnHover={1.05}  // Optional: Scale factor on hover
          rotateAmplitude={10} // Optional: Maximum rotation angle
          showMobileWarning={true} // Optional: Show a warning on mobile
          showTooltip={true} // Optional: Show the caption as a tooltip
          overlayContent="Sai Charan Sugali" // Optional: Content to display on overlay
          displayOverlayContent={true} // Optional: Show overlay content
        />
      </div>
      <img src={MeMobile} alt="mobie dsecription about saicharan" className="me-mobile" />

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        src={Education}
        alt="education details of sai cahran"
        className="education"
      />
      <div className='section2'>
        <MatrixStripComponent></MatrixStripComponent>
        <Skills></Skills>
      </div>
      <div className='Projects'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className='quality'
        >
          I Prefer <br /> Quality Over Quantity
        </motion.h1>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          src={Monitior}
          alt="Jarvis ptoject of sai charan"
          className="monitor"
        />
        <p className='description'>My Prestigious and Best Work Till Date: Jarvis, A Desktop AI Assistant. This is a windows application to completely make your daily tasks easier and helps you write and optimize codes, documents, scene narration, responds to visual question.</p>
        <LapDesc></LapDesc>
        <JarvisBtn className='JarvisBtn' text="Learn more">Learn More</JarvisBtn>
      </div>
      <div className='domain'>
        <div className='domainTitle'>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className='KeepAside'
          >
            Keep this<br />asside
          </motion.h1>
          <img src={DomainP} alt="paragraph" className="domainP" />
        </div>
        <div className='AiContainer'>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            src={AI}
            alt="Ai logo"
            className="AI"
          />
          <div className='carousel'>
            <Carousel
              baseWidth={window.innerWidth > 600 ? 600 : 200}
              autoplay={true}
              autoplayDelay={2000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
            <JarvisBtn className='JarvisBtn git' text="See on GitHub">Learn More</JarvisBtn>

          </div>
        </div>
        < div className='Design'>
          <ScrollVelocity
            texts={['Design . Art', 'Creativity', "Editing . Photography"]}
            velocity={100}
            className="custom-scroll-text"
          />
          <div className='designs'>
            <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
              <PixelCard variant="yellow" className='Card'>
                <div className='cardcont'>
                  <h2>Designs</h2>
                  <p>(click to show designs)</p>
                </div>
              </PixelCard>
            </div>
          </div>
        </div>
        <div className="droneCont">

          <div className="drone">

            <Drone></Drone>

            <div className="drone-text">
              <BlurText
                text="Drone"
                delay={500}
                animateBy="words"
                direction="top"
                onAnimationComplete=''
                className="drone-tech"
              />
              <BlurText
                text="Technology"
                delay={1000}
                animateBy="words"
                direction="top"
                onAnimationComplete=''
                className="drone-tech"
              />
            </div>
          </div>

          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={9}
            blurStrength={10}
            containerClassName='drone-description'
          >
            I attended a Drone Technology Workshop, where I learned to build, assemble, and calibrate drones from scratch. I also mastered drone piloting in a really cool way, making complex maneuvers feel effortless. Now, I have hands-on expertise in both hardware and flight control.
          </ScrollReveal>
        </div>
      </div>
      <div className='OtherProjects'>
        <div className='tools'>
          <GlitchText enableOnHover={false} className='glitchtext'>Experties</GlitchText>
          <div className='toolsContainer'>
            {logoList.map((logoimages, index) => (
              <Logos key={index} src={logoimages} alt="Logo" className={`logo-${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className='remProjects'>
        <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className='others'
        >
          Other Projects
        </motion.h1>

        </div>
      </div>
    </div>
  );
}

export default App;
