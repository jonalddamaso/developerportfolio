import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/team-popcorn.png",
      projectName: "Team Popcorn",
      projectLink: "https://team-popcorn-movie-database.vercel.app/",
      projectDescription:
        "This is an API movie web application that allows user to search for movies and actors overview and trailer.",
      projectTech: [
        "React",
        "Typescript",
        "CSS",
        "TailwindCSS",
        "TDD",
        "MovieApi",
      ],
      projectExternalLinks: {
        github: "https://github.com/dingbat91/TR_Project_TeamB",
        externalLink: "https://team-popcorn-movie-database.vercel.app/",
      },
    },
    {
      image: "/jmz-realestate.png",
      projectName: "JMZ Realtor",
      projectLink: "https://realestate-project-git-main-jonalddamaso.vercel.app/",
      projectDescription:
        "This is a Api app made with React, Nextjs and Node.js that can view all available properties for rent and for sale. It uses advanced JavaScript concepts like debouncing and is optimized for React. Has a filter for search",
      projectTech: [
        "React",
        "Nextjs",
        "Node.js",
        "Chakra-ui",
        "Sass",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/jonalddamaso/realestate-project",
        externalLink: "https://realestate-project-git-main-jonalddamaso.vercel.app/",
      },
    },
  
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
