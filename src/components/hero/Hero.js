import React from 'react';
import './Hero.css';

const Hero =props=>{
    return(
        <>
            <img className='hero' style={{width:'90%'}} src={require('../../images/ccgholidarybanner.png')} alt="feauted content"></img>
        </>
    )
}

export default Hero;

