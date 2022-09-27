import React, { useState } from 'react'
import './Hero.css'
import video from '../components/images/video.mp4'
import TypeWriterEffect from 'react-typewriter-effect';






const Hero = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='hero'>
            <video autoPlay loop muted plays-inline class="back-video">
            <source src={video} type="video/mp4"></source>
            </video>
             <div className='content'>
                 <h1>ISD GROUP USA INC</h1>
                 <h2> <span>
                    <TypeWriterEffect
                    textStyle={{
                    textAlign:'center',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '.8em',
                    }}
                    // startDelay={2000}
                    cursorColor="#fff"
                    multiText={[
                    'HiCAD SOFTWARE',
                    'PDM SOFTWARE',
                    'HELIOS ULTIMATE',
                    'THE WORLD OF CAD',
                    'HiCAD SOFTWARE',
                    'PDM SOFTWARE',
                    'HELIOS ULTIMATE',
                    'THE WORLD OF CAD',
                    'HiCAD SOFTWARE',
                    'PDM SOFTWARE',
                    'HELIOS ULTIMATE',
                    'THE WORLD OF CAD',
                    'HiCAD SOFTWARE',
                    'PDM SOFTWARE',
                    'HELIOS ULTIMATE',
                    'THE WORLD OF CAD',
                    'HiCAD SOFTWARE',
                    'PDM SOFTWARE',
                    'HELIOS ULTIMATE',
                    'THE WORLD OF CAD',
                    ]}

                     multiTextDelay={1000}
                    typeSpeed={20}
                    
                    />
                    </span> 
                 </h2>

            
                  <div class="allBtn">
                     <a class="allBtn" href="#">Explore</a>
                     <p>The world of CAD and PDM Solution</p>
                 </div>
            </div>
        </div>
    )
    
}

export default Hero
