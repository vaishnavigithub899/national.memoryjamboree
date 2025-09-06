import { motion } from "framer-motion";
import { FaBookOpen, FaPencilAlt, FaAppleAlt, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { MdOutlineScience, MdOutlineEmojiPeople } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

export const Discipline = () => {
  const disciplines = [
    { 
      id: 1, 
      title: "Mathematics", 
      desc: "Sharpen your problem-solving skills with fun equations and number puzzles.", 
      icon: <FaBookOpen className="w-12 h-12 text-yellow-500" />, 
      delay: 0.1 
    },
    { 
      id: 2, 
      title: "Science Experiments", 
      desc: "Explore the wonders of physics, chemistry, and biology through experiments.", 
      icon: <MdOutlineScience className="w-12 h-12 text-green-500" />, 
      delay: 0.2 
    },
    { 
      id: 3, 
      title: "Creative Writing", 
      desc: "Unleash your imagination with stories, essays, and poetry writing challenges.", 
      icon: <FaPencilAlt className="w-12 h-12 text-blue-500" />, 
      delay: 0.3 
    },
    { 
      id: 4, 
      title: "General Knowledge", 
      desc: "Test your awareness with quizzes from history, geography, and world events.", 
      icon: <FaGraduationCap className="w-12 h-12 text-purple-500" />, 
      delay: 0.4 
    },
    { 
      id: 5, 
      title: "Sports & Fitness", 
      desc: "Build teamwork and energy through fun outdoor and indoor sports.", 
      icon: <MdOutlineEmojiPeople className="w-12 h-12 text-red-500" />, 
      delay: 0.5 
    },
    { 
      id: 6, 
      title: "Art & Craft", 
      desc: "Express creativity with painting, craft, and colorful design activities.", 
      icon: <GiNotebook className="w-12 h-12 text-pink-500" />, 
      delay: 0.6 
    },
    { 
      id: 7, 
      title: "Healthy Eating", 
      desc: "Learn about nutrition and healthy food habits with fun challenges.", 
      icon: <FaAppleAlt className="w-12 h-12 text-orange-500" />, 
      delay: 0.7 
    },
    { 
      id: 8, 
      title: "Public Speaking", 
      desc: "Boost your confidence with debates, speeches, and storytelling.", 
      icon: <FaChalkboardTeacher className="w-12 h-12 text-teal-500" />, 
      delay: 0.8 
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fefcea] via-[#f1f1e6] to-[#fefcea] text-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-red-500 animate-bounce">
            School Disciplines 2025
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Across <span className="text-green-600 font-bold">8 exciting subjects</span>, 
            students explore creativity, knowledge, and skills to shine in every field.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {disciplines.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative bg-white border-2 border-dashed border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              {/* Notebook border effect */}
              <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-l-3xl"></div>
              
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded-2xl mb-6 mx-auto shadow-inner"
              >
                {item.icon}
              </motion.div>

              {/* Title & Desc */}
              <h4 className="text-2xl font-bold text-center text-green-600">
                {item.title}
              </h4>
              <p className="text-gray-700 text-center mt-3 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative chalk doodles */}
      <div className="absolute top-10 left-10 text-6xl opacity-20">✏️</div>
      <div className="absolute bottom-10 right-10 text-7xl opacity-20">📚</div>
    </section>
  );
};
