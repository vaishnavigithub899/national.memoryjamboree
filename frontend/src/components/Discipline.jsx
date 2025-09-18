import { motion } from "framer-motion";
import {
  FaClock,
  FaFont,
  FaImages,
  FaMicrophoneAlt,
  FaUserFriends,
} from "react-icons/fa";
import { MdOutlineNumbers } from "react-icons/md";
import { GiCardPlay } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";

export const Discipline = () => {
  const disciplines = [
    {
      id: 1,
      title: "5 Minute Random Numbers",
      desc: "Memorize and recall as many random numbers as possible within 5 minutes.",
      icon: <MdOutlineNumbers className="w-12 h-12 text-blue-600" />,
      delay: 0.1,
    },
    {
      id: 2,
      title: "5 Minute Random Words",
      desc: "Challenge your memory with a list of random words in just 5 minutes.",
      icon: <FaFont className="w-12 h-12 text-cyan-600" />,
      delay: 0.2,
    },
    {
      id: 3,
      title: "5 Minute Random Images",
      desc: "Recall random abstract images accurately in a 5-minute challenge.",
      icon: <FaImages className="w-12 h-12 text-indigo-600" />,
      delay: 0.3,
    },
    {
      id: 4,
      title: "5 Minute Binary Digits",
      desc: "Memorize long strings of binary digits (0s & 1s) within 5 minutes.",
      icon: <FaClock className="w-12 h-12 text-blue-800" />,
      delay: 0.4,
    },
    {
      id: 5,
      title: "5 Minute Fictional Dates",
      desc: "Recall fictional historical dates with corresponding events in 5 minutes.",
      icon: <BsCalendarDate className="w-12 h-12 text-teal-600" />,
      delay: 0.5,
    },
    {
      id: 6,
      title: "15 Minute Names and Faces",
      desc: "Memorize and recall the names of people shown in photographs.",
      icon: <FaUserFriends className="w-12 h-12 text-purple-600" />,
      delay: 0.6,
    },
    {
      id: 7,
      title: "Speed Cards",
      desc: "Memorize the order of a shuffled deck of cards in the fastest time possible.",
      icon: <GiCardPlay className="w-12 h-12 text-indigo-700" />,
      delay: 0.7,
    },
    {
      id: 8,
      title: "15 Minute Cards",
      desc: "Recall as many deck of cards in 15 minutes as possible.",
      icon: <GiCardPlay className="w-12 h-12 text-indigo-700" />,
      delay: 0.8,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#e6edf8] via-[#cfd8f7] to-[#e6edf8] text-gray-900">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#3b82f6]">
            Memory Disciplines
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Memory athletes will compete across{" "}
            <span className="text-sky-950 font-bold">
              8 memory disciplines{" "}
            </span>
            over a day.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {disciplines.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative bg-white border-2 border-dashed border-sky-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              {/* Notebook border effect */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-sky-700 to-sky-950 rounded-l-2xl"></div>

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-xl mb-4 mx-auto shadow-inner"
              >
                {item.icon}
              </motion.div>

              {/* Title & Desc */}
              <h4 className="text-xl font-bold text-center text-sky-950">
                {item.title}
              </h4>
              <p className="text-gray-700 text-center mt-2 text-sm leading-relaxed">
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
