import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calculator, FlaskRound as Flask } from 'lucide-react';

const services = [
  {
    icon: <Calculator className="h-8 w-8" />,
    title: 'Mathematics Coaching',
    description: 'Enhance your math skills with our expert guidance.',
    details: [
      'Arham Private Tutorials offers tailored math coaching for 7th to 10th standard students.',
      'Experienced tutors build a strong foundation in mathematical concepts.',
      'Interactive lessons make math engaging and accessible.',
      'Covers algebra, geometry, and statistics to boost confidence and exam success.',
      'Join us to excel in mathematics!'
    ]
  },
  {
    icon: <Flask className="h-8 w-8" />,
    title: 'Science Tutoring',
    description: 'Explore the wonders of science with our dedicated tutors.',
    details: [
      'Arham Private Tutorials provides science coaching for 7th to 10th standard students.',
      'Expert tutors simplify biology, chemistry, and physics concepts.',
      'Hands-on experiments make learning engaging and practical.',
      'Personalized attention ensures academic success.',
      'Develop critical thinking and a passion for science with us!'
    ]
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'English Language Coaching',
    description: 'Master the English language with personalized coaching.',
    details: [
      'Arham Private Tutorials offers English coaching for 7th to 10th standard students.',
      'Focus on reading, writing, and speaking for confident communication.',
      'Interactive lessons and literature enhance language skills.',
      'Personalized curriculum ensures steady progress.',
      'Join us to excel in English and communicate effectively!'
    ]
  }
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ y: 50, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise Coaching</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ y: 50, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative h-[400px] perspective-1000 cursor-pointer" onClick={() => toggleCard(index)}>
              <motion.div className="w-full h-full transition-all duration-500 preserve-3d" animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}>
                <div className="absolute w-full h-full backface-hidden">
                  <div className="h-full bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl flex flex-col items-center justify-center">
                    <div className="text-blue-600 mb-6 transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-center">{service.description}</p>
                    <p className="mt-6 text-blue-600 text-sm">Click to see more details</p>
                  </div>
                </div>

                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full bg-blue-600 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-white">
                    <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm text-blue-100">Click to flip back</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
