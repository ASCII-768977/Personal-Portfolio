import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { panelsData } from "../constants/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { earthVideo } from "../assets/index";
import { celloVideo } from "../assets/index";
import { harmonicaVideo } from "../assets/index";

const ExpandCard = ({
  name,
  imageUrl,
  activePanel,
  index,
  handlePanelClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      key={index}
      className={`panel bg-cover bg-center bg-no-repeat	h-[80vh] rounded-[50px] text-white cursor-pointer m-[10px] relative ${
        index === activePanel ? "active" : ""
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => handlePanelClick(index)}
    >
      {/* <h3 className="text-center text-[0.5rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[3rem] absolute">
        {name}
      </h3> */}
    </motion.div>
  );
};

const Hobby = () => {
  const [activePanel, setActivePanel] = useState(2);
  const [activeVideoIndex, setActiveVideoIndex] = useState(1);

  const videos = [earthVideo, celloVideo, harmonicaVideo];

  const handlePanelClick = (index) => {
    setActivePanel(index);
  };

  const handlePreviousVideo = () => {
    setActiveVideoIndex((prevState) =>
      prevState === 0 ? videos.length - 1 : prevState - 1
    );
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prevState) => (prevState + 1) % videos.length);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Embracing beautiful life</p>
        <h2 className={styles.sectionHeadText}>Hobbies</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          Music has been a central part of my life since I was six, when I first
          picked up a cello. Over the years, I've honed my skills and performed
          with various symphony orchestras, even touring abroad to Spain and
          Canada as a principal cellist. But music isn't just for the stage -
          I've also played as a street performer, sharing my love of music with
          anyone who happens by. In addition to my musical pursuits, I'm a
          devoted pet owner and animal lover. My British Shorthair cat brings me
          endless joy and companionship.
          <br />
          Lastly, I find programming and collaboration to be incredibly
          rewarding. Clean code that can make a real difference in people's
          lives is a passion of mine, and I'm always eager to work with others
          who share that same drive.
        </motion.p>
      </div>
      <div className="w-full relative">
        <button
          onClick={handlePreviousVideo}
          className="bg-secondary hover:bg-content text-white font-bold py-2 px-4 rounded-lg absolute top-[40%] left-10 max-md:left-1 cursor-pointer z-10 max-sm:top-3 max-sm:left-3"
        >
          ⬅️
        </button>
        <video
          src={videos[activeVideoIndex]}
          autoPlay
          loop
          controls
          className="h-auto md:h-[55vh] w-[100%]"
        ></video>
        <button
          onClick={handleNextVideo}
          className="bg-secondary hover:bg-content text-white font-bold py-2 px-4 rounded-lg absolute top-[40%] right-10 max-md:right-1 cursor-pointer z-10 max-sm:top-3 max-sm:left-3"
        >
          ➡️
        </button>
      </div>
      <div className="flex">
        {panelsData.map((panel, index) => (
          <ExpandCard
            key={panel.name}
            index={index}
            activePanel={activePanel}
            handlePanelClick={handlePanelClick}
            {...panel}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobby, "hobby");
