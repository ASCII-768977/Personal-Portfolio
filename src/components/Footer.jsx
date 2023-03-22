import React, { useState, useEffect } from "react";
import { celloLogo } from "../assets";
import { Link } from "react-router-dom";
import { icon1, icon2, icon3 } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { footerIcons } from "../constants/index";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} w-full flex flex-col gap-10 md:flex-row justify-evenly items-center py-5 min-h-[300px] top-0 z-20 bg-primary`}
    >
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex justify-center items-center gap-10"
      >
        <img src={celloLogo} alt="LOGO" className="max-w-[100px] h-auto" />

        <div>
          <h3 className={styles.heroSubText}>Forrest Lin</h3>
          <p>Email: forrest.lin.work@gmail.com</p>
          <p>&copy; Copyright 2023. All Rights Reserved.</p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col justify-center items-center gap-5"
      >
        <div className="flex gap-10 social-icon">
          {footerIcons.map((icon, index) => (
            <Link
              to={icon.link}
              target="_blank"
              className="link"
              key={icon.name}
            >
              <img src={icon.icon} alt={icon.name} />
            </Link>
          ))}
        </div>
        <div className="flex">
          <div className="heart top-[0.6rem] right-[0.625rem]" />
          <p>Let's get in touch now</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
