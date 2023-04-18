import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, youtube } from "../assets";
import { SectionWrapper } from "../hoc/index";
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_link,
  website_link,
  icon,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxWords = 500;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const descriptionWithDots = description
    .split("")
    .slice(0, maxWords)
    .join("")
    .concat("...");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[660px] relative"
      >
        <div className="relative w-full h-[230px]">
          {website_link !== "" ? (
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl cursor-pointer"
              onClick={() => window.open(website_link, "_blank")}
            />
          ) : (
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          )}

          <div className="absolute top-0 right-0 m-3 card-img_hover">
            {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover"> */}
            <div
              onClick={() => window.open(source_link, "_blank")}
              className="project-link_button w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={icon === "github" ? github : youtube}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description.length > 500
              ? isExpanded
                ? description
                : descriptionWithDots
              : description}
          </p>

          {description.split("").length > maxWords && (
            <button
              onClick={handleToggle}
              className="bg-secondary py-3 px-3 text-white font-bold shadow-md shadow-primary rounded-xl w-fit-content my-3 hover:bg-[#333333] hover:text-[#eeeeee]"
            >
              {isExpanded ? "View less" : "View more"}
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 absolute bottom-0.5 ">
          {tags.map((tag, index) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          I truly enjoy the satisfaction that comes from programming. To date, I
          have completed several full-stack projects and continuously update a
          variety of interesting components using HTML, CSS, and JavaScript on
          my Github profile. I love to challenge myself by exploring new
          technologies and frameworks, and I'm constantly looking to expand my
          skillset.
          <br /> In addition to these projects, I devote a portion of my time to
          learning new frameworks and technologies that can enhance my abilities
          as a programmer. I enjoy staying up-to-date with the latest trends in
          the industry and seeking out new challenges to overcome. Programming
          has become a passion for me, and I am always eager to take on new
          projects and expand my knowledge in the field.
        </motion.p>
      </div>

      <div className="mt-10 md:mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");
