import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSendMessage = () => {
    const { name, email, message } = formData;
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=917021699614&text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-[#214c87] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1e3a69] p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-white"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                className="w-full bg-white text-[#214c87] font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                Send Message via WhatsApp
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
            {/* Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Arham+Private+Tutorials,+Bhayander+West"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4 bg-[#1e3a69] p-4 rounded-lg transition hover:bg-[#2b4d8f]"
            >
              <div className="bg-white p-3 rounded-full">
                <MapPin className="h-6 w-6 text-[#214c87]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Location</h4>
                <p className="text-gray-300 mt-2">
                  Arham Private Tutorials, Tirth Tower,<br />
                  Near Ganesh Mandir, 60 ft road <br />
                  Bhayander West, Maharashtra 401101, India
                </p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+917021699614" className="flex items-start space-x-4 bg-[#1e3a69] p-4 rounded-lg transition hover:bg-[#2b4d8f]">
              <div className="bg-white p-3 rounded-full">
                <Phone className="h-6 w-6 text-[#214c87]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <p className="text-gray-300 mt-2">+91 70216 99614</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:arhamprivatetutorials@gmail.com" className="flex items-start space-x-4 bg-[#1e3a69] p-4 rounded-lg transition hover:bg-[#2b4d8f]">
              <div className="bg-white p-3 rounded-full">
                <Mail className="h-6 w-6 text-[#214c87]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <p className="text-gray-300 mt-2">arhamprivatetutorials@gmail.com</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
