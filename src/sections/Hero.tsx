import Button from "@/components/Button";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [isOpen, setIsOpen] =useState(false)

  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Jonald Damaso.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        I craft things for the web.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I&apos;m a passionate web developer with a knack
         for creating stunning and intuitive online experiences. 
         With a deep understanding of HTML, CSS, and JavaScript, 
         I specialize in crafting responsive and user-friendly websites 
         that leave a lasting impression.
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Connect with me"
          link="https://www.linkedin.com/in/jonalddamaso/"
        />
        {/* <button className="btn" onClick={() => setIsOpen(true)}>Connect with me</button>
        
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h4 className="contact-sub-title">Check out my social media accounts for more info!</h4>
          <a href="https://github.com/jonalddamaso" className="social-icons-list-item-link" target="_blank">
            <FiGithub /><label> Github Account</label>
          </a>
          <a href="https://www.linkedin.com/in/jonalddamaso/" className="social-icons-list-item-link" target="_blank">
            <FiLinkedin /><label> LinkedIn Account</label>
          </a>
              
        </Modal> */}

      </motion.div>
    </div>
  );
}

export default Hero;
