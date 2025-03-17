import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Students studying"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-[#004f98]">Empowering young mind</h3>
            <h3 className="text-3xl font-bold text-gray-900">Your success is our mission</h3>
            <p className="text-gray-600">
              At Arham Private Tutorials, we specialize in nurturing the potential of students from 7th to 10th standard. Our dedicated educators are committed to providing personalized attention and tailored learning experiences that cater to each student's unique needs. Located in Bhayander West , we focus on building strong foundational skills and fostering a love for learning. Join us in shaping a brighter future for your child through quality education and consistent support.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-blue-600">15+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-blue-600">5000+</h4>
                <p className="text-gray-600">Students Taught</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;