// src/pages/Payments.jsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaUsers, FaSchool, FaClock } from "react-icons/fa";

export default function Payments() {
  const paymentOptions = [
    {
      title: "Early Bird Payment",
      description:
        "Register early and avail discounts. Early bird available till 26th Sept.",
      extra: "Purpose of Payment:\nMJN-Early Bird\n\nAmount:\n₹ 3,000",
      color: "from-green-400 to-green-600",
      type: "early",
      icon: <FaClock className="text-4xl mb-4" />,
    },
    {
      title: "Group Registration",
      description:
        "Special offers available for group registrations of students.",
      extra: "Purpose of Payment:\nMJN-Group of 3 Registration\n\nAmount:\n₹ 7,500",
      color: "from-blue-400 to-blue-600",
      type: "group",
      icon: <FaUsers className="text-4xl mb-4" />,
    },
    {
      title: "School Registration",
      description: `Avail 65% OFF by registering as a school group at only Rs. 1225/-.
Min group size of 10.

Connect with our sales team to register as a school.`,
      color: "from-orange-400 to-orange-600",
      type: "school",
      icon: <FaSchool className="text-4xl mb-4" />,
    },
  ];

  // 👇 Smooth fade-up animation
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const handleWhatsApp = () => {
    const phone = "918810569514";
    const message = encodeURIComponent(
      "Hi,\nWe want to register as a school group. Kindly let us know the process."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfaf5] to-[#f6f0e5] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-sky-950 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Registration Options
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">
          {paymentOptions.map((option, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl shadow-xl bg-gradient-to-r ${option.color} text-white p-8 flex flex-col justify-between hover:scale-105 transition-transform whitespace-pre-line`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="flex flex-col items-center text-center">
                {option.icon}
                <h2 className="text-2xl font-bold mb-4">{option.title}</h2>
                <p className="text-base leading-relaxed mb-4">
                  {option.description}
                </p>
                {option.extra && (
                  <div className="bg-white/20 p-4 rounded-lg text-sm whitespace-pre-line">
                    {option.extra}
                  </div>
                )}
              </div>

              {option.type === "school" ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={handleWhatsApp}
                  className="mt-6 flex items-center justify-center gap-2 px-5 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-gray-100"
                >
                  <FaWhatsapp className="text-xl" />
                  Message on WhatsApp
                </motion.button>
              ) : (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={
                    option.type === "early"
                      ? "https://imjo.in/Zc58Mv"
                      : "https://imjo.in/5AyxyJ"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-5 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-100"
                >
                  Register Now →
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
