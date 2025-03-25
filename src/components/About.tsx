import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/photo1.jpg",
  "/images/photo3.jpg",
  "/images/photo10.jpg",
  "/images/photo2.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
  "/images/photo7.jpg",
  "/images/photo9.jpg",
  "/images/photo8.jpg",
  "/images/photo11.jpg",
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [sinceYear, setSinceYear] = useState(2000);
  const [studentsTaught, setStudentsTaught] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSinceYear((prev) => (prev < 2012 ? prev + 1 : prev));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentsTaught((prev) => (prev < 5000 ? prev + 100 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="about" className="py-20 bg-[#214c87]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Slider with Navigation Arrows */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-lg shadow-xl"
          >
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}

            {/* Left Arrow Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-60 px-3 py-1 rounded-full hover:bg-opacity-80 transition"
            >
              {"<"}
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-white bg-black bg-opacity-60 px-3 py-1 rounded-full hover:bg-opacity-80 transition"
            >
              {">"}
            </button>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Empowering Young Minds</h3>
            <h3 className="text-3xl font-bold text-white">Your Success is Our Mission</h3>
            <p className="text-gray-200">
              At Arham Private Tutorials, we specialize in nurturing the potential of students from 7th to 10th standard.
              Our dedicated educators provide personalized attention and tailored learning experiences.
              Located in Bhayander West, we focus on building strong foundational skills and fostering a love for learning.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <p className="text-gray-300">Since</p>
                <h4 className="text-4xl font-bold text-white">{sinceYear}</h4>
              </div>
              <div className="text-center">
                <p className="text-gray-300">Students Taught</p>
                <h4 className="text-4xl font-bold text-white">{studentsTaught}+</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
