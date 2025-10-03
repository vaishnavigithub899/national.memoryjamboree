// src/pages/Payments.jsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaUsers, FaSchool, FaClock } from "react-icons/fa";

export default function Payments() {
  const paymentOptions = [
    {
      title: "SINGLE REGISTRATION",
      description:
        "Standard registration fee applies after the early bird offer ends.",
      color: "from-red-400 to-red-600",
      type: "regular",
      link: "https://imjo.in/yGpVry",
      icon: <FaClock className="text-5xl mb-4" />,
    },
    {
      title: "EARLY BIRD DISCOUNT 3000/-",
      description:
        "Register early and avail discounts. Early bird available till 26th Sept.",
      color: "from-green-400 to-green-600",
      type: "early",
      link: "https://imjo.in/Zc58Mv",
      icon: <FaClock className="text-5xl mb-4" />,
    },
    {
      title: "GROUP REGISTRATION",
      description:
        "Register as a group of 3 and get 25% off. Limited Period Offer*.",
      color: "from-blue-400 to-blue-600",
      type: "group",
      link: "https://imjo.in/5AyxyJ",
      icon: <FaUsers className="text-5xl mb-4" />,
    },
    {
      title: "SCHOOL REGISTRATION",
      description: `Register as a school group of 10 students. Get more than 50% off. `,
      color: "from-orange-400 to-orange-600",
      type: "school",
      icon: <FaSchool className="text-5xl mb-4" />,
    },
  ];

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
    const phone = "918810569514"; // ✅ WhatsApp number (with country code, India=91)
    const message = encodeURIComponent(
      "Hi,\n\nI want to know more about the upcoming, Memory Jamboree competition."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  // Date logic
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sept26 = new Date(today.getFullYear(), 8, 26);
  sept26.setHours(0, 0, 0, 0);

  const filteredOptions = paymentOptions.filter((option) => {
    if (option.type === "early" && today > sept26) return false;
    if (option.type === "regular" && today <= sept26) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-sky-950 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Register Now
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-10">
          {filteredOptions.map((option, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl shadow-2xl bg-gradient-to-r ${option.color} text-white px-10 py-12 flex flex-col items-center text-center hover:scale-105 transition-transform w-72 min-h-[400px]`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="flex flex-col items-center flex-grow">
                {option.icon}
                <h2 className="text-2xl font-bold mb-4">{option.title}</h2>
                <p className="text-base leading-relaxed flex-grow flex items-center justify-center">
                  {option.description}
                </p>
              </div>

              {option.type === "school" ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={handleWhatsApp}
                  className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-gray-100"
                >
                  <FaWhatsapp className="text-xl" />
                  Connect with us
                </motion.button>
              ) : (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-100 inline-block"
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
