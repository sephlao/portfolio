import React from 'react';
import hero from '../img/svg/web-dev-banner.svg'

export default () =>
    <section className="hero-banner">
        <div className="hero-text">
            <p className="text-greet">Hi, I'm</p>
            <h1 className="text-name">Joseph Lao,</h1>
            <h2 className="text-tagline">I like to write code for the web.</h2>
        </div>
        <div className="hero-img">
            <img src={hero} alt="web development"></img>
        </div>

        <div className="scroll-icon">
            <span></span>
        </div>
    </section>;