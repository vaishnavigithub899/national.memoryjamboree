import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const faqs = [
    {
      question: "📚 Will students miss academic time?",
      answer:
        "No, the memory sessions are designed so students won’t miss academic time.",
    },
    {
      question: "🎓 How do students qualify for the championship?",
      answer:
        "Students qualify through school-level selections and pre-registration criteria.",
    },
    {
      question: "⭐ How will this benefit our school's reputation?",
      answer:
        "Participation highlights your school’s commitment to cognitive development and excellence.",
    },
    {
      question: "📖 Are there resources to help me prepare?",
      answer:
        "Yes, WhiteForest provides study material and online guidance for all disciplines.",
    },
    {
      question: "🧑‍🏫 What support do we get after the briefing?",
      answer:
        "Our team provides ongoing support and guidance until the championship.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-20 bg-gradient-to-b from-[#e6edf8] via-[#cfd8f7] to-[#e6edf8] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#3b82f6] drop-shadow-md">
            ✨ Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Curious minds ask the best questions! Here are some quick answers 📝
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 relative">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl bg-white border-2 border-dashed border-sky-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-sky-50 transition-colors rounded-2xl"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold text-blue-800 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-blue-600 flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-700 mb-4 font-medium">
            Still scratching your head? 🤔
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919987029998"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-950 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-md"
            >
              💬 Chat on WhatsApp
            </a>
            <button className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#3b82f6] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all shadow-md">
              🏫 Register Your School
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-12 left-10 w-16 h-16 bg-blue-400 rounded-full blur-lg opacity-30 animate-bounce"></div>
      <div className="absolute bottom-16 right-10 w-24 h-24 bg-sky-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-indigo-300 rounded-full blur-xl opacity-30 animate-spin"></div>
    </section>
  );
};
