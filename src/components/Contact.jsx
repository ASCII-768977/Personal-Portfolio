import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;

    Object.keys(form).forEach((field) => {
      if (!form[field]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `Please write down your ${field}`,
        }));
        hasErrors = true;
      }
    });

    if (!validateEmail(form.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please using a valid email address",
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_5ac09hm",
        "template_idiagtg",
        {
          from_name: form.name,
          to_name: "Forrest Lin",
          from_email: form.email,
          to_email: "forrest.lin.work@gmail.com",
          message: form.message,
        },
        "OMjIoLA0FqIWACcek"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your message! I will get back to you as soon as possible."
          );
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  const getInputBorderClass = (field) => {
    return errors[field] ? "border border-red-500" : "border-none";
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg text-white outlined-none border-none font-medium"
            />
            {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg text-white outlined-none border-none font-medium"
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email}</p>
            )}
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              row="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg text-white outlined-none border-none font-medium"
            />
            {errors.message && (
              <p className="text-red-500 mt-2">{errors.message}</p>
            )}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
