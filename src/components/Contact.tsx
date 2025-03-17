import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Location - Clickable */}
            <a
              href="https://www.google.com/maps?q=Arham+Private+Tutorials,+Bhayander+West"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4 hover:bg-gray-100 p-3 rounded-lg transition"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Location</h4>
                <p className="text-gray-600 mt-2">
                  Arham Private Tutorials, Tirth tower,<br />
                  Near Ganesh Mandir, 60 ft road <br />
                  Bhayander West, Maharashtra 401101, India
                </p>
              </div>
            </a>

            {/* Phone - Clickable */}
            <a
              href="tel:+917021699614"
              className="flex items-start space-x-4 hover:bg-gray-100 p-3 rounded-lg transition"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600 mt-2">+91 70216 99614</p>
              </div>
            </a>

            {/* Email - Clickable */}
            <a
              href="mailto:arhamprivatetutorials@gmail.com"
              className="flex items-start space-x-4 hover:bg-gray-100 p-3 rounded-lg transition"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600 mt-2">arhamprivatetutorials@gmail.com</p>
              </div>
            </a>

            {/* Embedded Google Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.459490943617!2d72.84910037467067!3d19.305857644717364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1d3320aa053%3A0xe449564942978a5b!2sArham%20Private%20Tutorials!5e0!3m2!1sen!2sin!4v1742227851507!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
