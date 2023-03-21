import React, { useState, useEffect } from "react";
import { celloLogo } from "../assets";
import { Link } from "react-router-dom";
import { icon1, icon2, icon3 } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../utils/motion";

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
          <p>WeChat: ASCII-768977</p>
          <p>Email: forrest.lin.work@gmail.com</p>
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
          <Link
            to="https://www.linkedin.com/in/forrest-lin"
            target="_blank"
            className="link"
          >
            <img src={icon1} alt="linkedin" />
          </Link>
          <Link
            to="https://github.com/ASCII-768977"
            target="_blank"
            className="link"
          >
            <img src={icon2} alt="facebook" />
          </Link>
          <Link
            to="https://www.instagram.com/forrest_lin_/"
            target="_blank"
            className="link"
          >
            <img src={icon3} alt="instagram" />
          </Link>
        </div>
        <p>Let's get in touch now !</p>
      </motion.div>
    </div>
  );
};

export default Footer;
