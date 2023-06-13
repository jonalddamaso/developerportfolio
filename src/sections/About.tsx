import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hi there! My name is Jonald, and I am passionate about creating
            digital content for the web. My interest in web development was
            sparked in 2018 when I created my first project called Christine&apos;s Garden, an
            e-commerce website built using Php Larvel Framework.
          </p>
          <p className="about-grid-info-text">
          I moved to London from Manila to join my
          wife and got a web development
          internship with a travel and media
          company. I am proud to have collaborated
          with the project leader on the design and
          functionality updates on the company&apos;s
          various websites using PHP, Bootstrap,
          HTML5, CSS3 and WordPress.
          </p>

          <p className="about-grid-info-text">
          I am a proud father of a little boy who I
          enjoy taking to the park and playing with
          daily. 

          </p>
          <p className="about-grid-info-text">
            Fastforward today, I completed the &nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://www.techreturners.com/"
            >
              Tech Returners Programme,
            </Link>
            &nbsp; to get back to my career and aimed at enhancing 
            frontend development skills with the modern technologies.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">Bootstrap CSS</li>
            <li className="about-grid-info-list-item">Chakra-ui CSS</li>
            <li className="about-grid-info-list-item">TDD(Test-Driven Development)</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/jon.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
