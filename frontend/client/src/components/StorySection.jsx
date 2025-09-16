import { motion } from "framer-motion";

export const StorySection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#e6edf8] via-[#cfd8f7] to-[#e6edf8] text-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#3b82f6] animate-bounce">
            What is National Memory Jamboree?
          </h2>
          <p className="text-gray-700 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Memory Jamboree is the festival of memory power to celebrate memory
            athletes across all age groups.
            <br />
            A test of{" "}
            <span className="font-bold text-sky-950">mental agility</span>,
            focus, and recall. Students, professionals, and memory enthusiasts
            from around the country will gather to showcase their memory skills.
            From remembering numbers and faces to speed cards and abstract
            images, every challenge pushes the limits of the human brain.
          </p>
        </motion.div>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white border-2 border-dashed border-sky-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition cursor-pointer relative"
          >
            <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-sky-500 to-sky-950 rounded-l-3xl"></div>
            <h3 className="text-2xl font-bold text-sky-950 mb-4">
              National Participation
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Participants are welcome from every state of India, representing
              schools, colleges, and organizations. The championship nurtures
              multi-level collaboration and showcases the diversity of memory
              talents across the country.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-white border-2 border-dashed border-sky-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition cursor-pointer relative"
          >
            <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-blue-400 to-blue-700 rounded-l-3xl"></div>
            <h3 className="text-2xl font-bold text-sky-950 mb-4">
              Legacy & Impact
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Since its inception, the memory championships have inspired young
              minds to push cognitive boundaries, develop learning techniques,
              and achieve excellence in memory mastery. It has become a platform
              to celebrate mental prowess and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative doodles */}
      <div className="absolute top-10 left-10 text-6xl opacity-20">✏️</div>
      <div className="absolute bottom-10 right-10 text-7xl opacity-20">📚</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-6xl opacity-10">
        🖍️
      </div>
    </section>
  );
};
