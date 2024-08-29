import React from 'react';
import './HeroSection.css';

const HeroSection = ({ image, mainHeading, content, className }) => {
    return (
        <div className={['hero-section', className && className].join(' ')}>
            <img src={image} alt="" />
            <div className='hero-section-contents'>
                <h2>{mainHeading}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default HeroSection;