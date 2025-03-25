import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calculator, FlaskRound as Flask } from 'lucide-react';

const services = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Excellence in Languages ',
    description: 'ENGLISH | HINDI | MARATHI',
    details: [
      '• Comprehensive Language Skills: Enhance reading, writing, speaking, and listening through fun activities and real-life examples.',
      '• Literature Made Easy: Understand chapters and stories in an engaging, child-friendly way.',
      '• Confident Communication: Build confidence with public speaking, debates, and creative writing.',
      '• Strong Writing Skills: Master letters, reports, stories, and more with structured practice.'
    ]
  },
  {
    icon: <Flask className="h-8 w-8" />,
    title: 'Excellence in Science',
    description: 'Concept based teaching in Science',
    details: [
      '• Learning Concepts, Not Just Facts: We focus on helping students truly understand scientific ideas instead of just memorizing information.',
      '• Science in Everyday Life: Students discover how science connects to things they see and use every day.',
      '• Problem-solving Skills: We teach students how to think through scientific questions step-by-step, building skills they will need for future studies.',
    ]
  },
  {
    icon: <Calculator className="h-8 w-8" />,
    title: 'Excellence in Mathematics',
    description: 'Robust teaching and practice in Mathematics',
    details: [
      '• Strong Basics: We make sure students master the fundamentals before moving on to harder topics.',
      '• Lots of Practice: Students work through many different types of problems to build both accuracy and speed.',
      '• Smart Thinking: We encourage students to solve problems in different ways, developing logical thinking skills.',
      '• Individual Attention: We identify what each student needs help with and provide targeted practice to help them improve.'
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
    <section id="services" className="py-20 bg-[#214c87]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ y: 50, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Expertise Coaching</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-[400px] perspective-1000 cursor-pointer"
              onClick={() => toggleCard(index)}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
            >
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
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
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
