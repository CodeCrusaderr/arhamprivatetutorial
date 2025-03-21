import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/background_video.mp4" type="video/mp4" />
      </video>

      {/* White Transparent Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <div className="relative z-10 text-center px-4">
        <motion.img
          src="/images/logo_withoutbg.png"
          alt="Logo"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto w-64 h-auto md:w-80"
        />

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 mt-6"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Now
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
