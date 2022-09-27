import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Learn More About ISDGROUP,</p>
                    <p>THE WORLD OF CAD AND PDM SOLUTION</p>
                    <p>Easier engineering and more efficient cooperation on engineering design, product construction and structural engineering projects with the innovative software solutions and services of the ISD Group.</p>
                    <button className='button'>Get Free Demo or Any</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://videodelivery.net/b7e9abf2800f46be7d97670417cd3789/thumbnails/thumbnail.gif?duration=15s' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo
