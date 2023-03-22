import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { panelsData } from "../constants/index";

const ExpandCard = () => {
  const [activePanel, setActivePanel] = useState(2);

  const handlePanelClick = (index) => {
    setActivePanel(index);
  };

  return (
    <div className="flex ">
      {panelsData.map((panel, index) => (
        <div
          key={index}
          className={`panel bg-cover bg-center bg-no-repeat	h-[80vh] rounded-[50px] text-white cursor-pointer	flex-[0.5] m-[10px] relative ${
            index === activePanel ? "active flex-[5]" : ""
          }`}
          style={{ backgroundImage: `url(${panel.imageUrl})` }}
          onClick={() => handlePanelClick(index)}
        >
          <h3 className="absolute bottom-[20px] left-[20px] m-0">
            {panel.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(ExpandCard, "");
