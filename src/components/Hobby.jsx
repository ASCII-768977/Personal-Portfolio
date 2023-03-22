import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { panelsData } from "../constants/index";
import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";
import { earthVideo } from "../assets/index";

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

  const handlePanelClick = (index) => {
    setActivePanel(index);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Embracing beautiful life</p>
        <h2 className={styles.sectionHeadText}>Hobbies</h2>
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
      <video
        src={earthVideo}
        autoPlay
        muted
        loop
        className="h-auto md:h-[55vh] w-[100%]"
      ></video>
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

export default SectionWrapper(Hobby, "");
