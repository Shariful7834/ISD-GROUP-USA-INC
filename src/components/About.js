import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>HiCAD</h2>
                    <span className='line'></span>
                    <p>
                        The 2-D/3-D CAD software for all-rounders and experts

                        Our 3-D CAD solution HiCAD makes daily designing amazingly easy and enormously versatile. HiCAD can be adapted perfectly to your requirements and the size of your company. Small manufacturing companies, medium-sized companies with their own product development or large international enterprises will find the right composition of all required functions in one system due to the modular structure of HiCAD. In the fields of engineering design, structural engineering and product design, HiCAD can easily meet the respective high demands on a CAD system.
                    </p>
                    <p>Our 3-D CAD solution HiCAD makes daily designing amazingly easy and enormously versatile</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
