import React, { useState } from 'react'
import './Hero.css'
import video from '../components/images/video.mp4'
import { Typewriter } from 'react-simple-typewriter'






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
                 <h1>WE DELIVER</h1>
            <div className='provide'>
                
                 <h3> 
                 <span style={{ color: '#D20643', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['PDM SOLUTION', 'CAD 3D-2D', 'THE WORLD OF CAD' ,'AND PDM SOLUTIONS' ]}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        
                    />
                    </span>
                </h3>
                 </div>
                 
                 <div className='exploreBtn'>
                     <div className="allBtn">
                         <a className="allBtn" href="#">Explore</a>
                         <p>The world of CAD and PDM Solution</p>
                     </div>
                    
                 </div>
            
            </div>
        </div>
    )
    
}

export default Hero
