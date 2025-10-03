import { motion } from "framer-motion";
import Payments from "./Payments.jsx";
import { useEffect } from "react";

const Register = () => {
    
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-blue-50 to-green-50 px-6 py-12">
      {/* Banner Image */}
      {/* <motion.img
        aria-hidden="true"
        src="./img/whiteforest.png"
        alt="Registration Banner"
        className="max-w-lg w-full mb-10 object-contain drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      /> */}

      {/* Content Section */}
      <motion.div
        className="text-center pt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-extrabold text-blue-900 tracking-wide">
          Memory Jamboree
        </h1>
        <h2 className="text-3xl font-bold text-green-700 mt-3">
          Nation Edition 2025
        </h2>
        <p className="text-2xl font-semibold text-gray-900 mt-6 leading-relaxed">
          📅 28th December 2025, Sunday <br />
          📍 Delhi
        </p>
      </motion.div>

      {/* Payments Section */}
      <motion.div
        className="w-full mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Payments />
      </motion.div>
    </div>
  );
};

export default Register;
