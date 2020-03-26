import React from "react";
import { motion } from "framer-motion";
import hero from "../img/svg/web-dev-banner.svg";

export default () => (
  <motion.section 
    initial={{ opacity: 0}}
    animate={{
        opacity: 1,
        ease: "easeIn"
    }}
    transition={{
        duration: 1.5
    }}
  className="hero-banner">
    <div className="hero-text">
      <p className="text-greet">Hi, I'm</p>
      <h1 className="text-name">Joseph Lao,</h1>
      <h2 className="text-tagline">I like to write code for the web.</h2>
    </div>
    <motion.div
      initial={{
        scale: 0.75,
        y:100
      }}
      animate={{
        scale: 1,
        y:0
      }}
      transition={{
        duration: .5
        }}
      className="hero-img">
      <img src={hero} alt="web development"></img>
    </motion.div>

    <div className="scroll-icon">
      <span></span>
    </div>
  </motion.section>
);
