import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Tech Returners",
      role: "Software Engineer - Upskilling",
      url: "https://www.techreturners.com/",
      start: "January 2023",
      end: "May 2023",
      shortDescription: [
        "Completed an upskilling course which focused on advanced Javascript, Typescript, React, Unit Testing using Jest and Test-Driven Development, as well as career and mindset workshops.",
        "Created user responsive interface that allow same user experience on any device; and user experience that fetched data and relayed it to React components.",
        "Key projects include Mars Rover, a programme that moves rovers around using Typescript; and Team Popcorn, a Typescript/React API website that allows users to search for movies, actors and trailers"
      ],
    },
    {
      name: "Cartlands Group",
      role: "Junior Web Developer",
      url: "https://www.londonmagicaltours.com/",
      start: "April 2020",
      end: "July 2020",
      shortDescription: [
        "I was involved in several projects within travel and media industry,  featuring elements of both front-end design and back-end development.",
        " My responsibilities included redesigning and improving the website of the London Magical Tours, where I used WordPress, Javascript, Php, HTML5, and CSS3, MySql, ajax, jquerys and Bootstrap",
      ],
    },
    {
      name: "FastTrack Solutions, Inc.",
      role: "Full Stack Web Developer",
      url: "https://fasttrackph.com/",
      start: "February 2019",
      end: "October 2020",
      shortDescription: [
        " I was mainly responsible for the design, testing, development and deployment of cloud-based accounting software, using Javascript, HTML and PHP.",
        "I also went on fieldwork to provide client support during and after the software implementation.",
      ],
    },
    {
      name: "AffinityX",
      role: "Quality Assurance Specialist",
      url: "https://affinityx.com/",
      start: "April 2013",
      end: "March 2018",
      shortDescription: [
        "This role involved reviewing the work of graphic designers and junior quality analysts to ensure that the advertising products meet the specifications of our US-based customers.",
        "I also contributed to the improvement of the quality assurance process of the company and to training junior quality analysts.",
      ],
    },
    {
      name: "DDC Group",
      role: "Quality Controller and Trainer",
      url: "https://theddcgroup.com/",
      start: "March 2008",
      end: "December 2012",
      shortDescription: [
        "My role involved providing quality assurance services for companies within the shipping industry.",
        "This included reviewing the work performed by a separate internal team based in the US and ensuring that freight documents meet customer specifications.",
        " I also contributed to the improvement of the quality assurance process of the company and in training junior quality analysts.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
