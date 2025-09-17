// src/pages/Payments.jsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaUsers, FaSchool, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Payments() {
  const navigate = useNavigate();

  const paymentOptions = [
    {
      title: "Registration After 26th Sept",
      description:
        "Standard registration fee applies after the early bird offer ends.",
      color: "from-red-400 to-red-600",
      type: "regular",
      icon: <FaClock className="text-4xl mb-4" />,
    },
    {
      title: "Early Bird Payment",
      description:
        "Register early and avail discounts. Early bird available till 26th Sept.",
      color: "from-green-400 to-green-600",
      type: "early",
      icon: <FaClock className="text-4xl mb-4" />,
    },
    {
      title: "Group Registration",
      description:
        "Special offers available for group registrations of students.",
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

  // Function to navigate to the correct form based on type
  const handleFormNavigation = (type) => {
    switch (type) {
      case "regular":
        navigate("/RegistrationForm");
        break;
      case "early":
        navigate("/Form");
        break;
      case "group":
        navigate("/GroupRegistration");
        break;
      default:
        break;
    }
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

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
          Registration Options
        </motion.h1>

        <div className="grid md:grid-cols-4 gap-10">
          {paymentOptions.map((option, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl shadow-xl bg-gradient-to-r ${option.color} text-white px-8 py-10 flex flex-col items-center text-center hover:scale-105 transition-transform`}
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
                  className="mt-6 flex items-center justify-center gap-2 px-5 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-gray-100"
                >
                  <FaWhatsapp className="text-xl" />
                  Message on WhatsApp
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleFormNavigation(option.type)}
                  className="mt-6 px-5 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-100"
                >
                  Register Now →
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
