import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc/index";
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxWords = 70;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const descriptionWithDots = description
    .split(" ")
    .slice(0, maxWords)
    .join(" ")
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
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
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

          {description.split(" ").length > maxWords && (
            <button
              onClick={handleToggle}
              className="bg-secondary py-3 px-3 text-white font-bold shadow-md shadow-primary rounded-xl w-fit-content my-3 view-more"
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

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          unde beatae velit, tempora optio fuga est veniam temporibus enim esse
          in eum commodi reprehenderit, inventore quam vitae aliquid deleniti
          non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          laudantium adipisci sit dignissimos, fugit, expedita asperiores
          ducimus similique placeat tempore repudiandae. Consectetur aspernatur
          labore voluptatibus vero delectus laudantium adipisci doloribus?
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
