import { motion } from "framer-motion";

export const StorySection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fefcea] via-[#f6f6e9] to-[#fefcea] text-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-red-500 animate-bounce">
            What is the Memory Championship?
          </h2>
          <p className="text-gray-700 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            A test of <span className="font-bold text-green-600">mental agility</span>, focus, and recall. 
            Students, professionals, and memory enthusiasts from around the world gather to showcase their 
            memory skills. From remembering numbers and faces to speed cards and abstract patterns, 
            every challenge pushes the limits of the human mind.
          </p>
        </motion.div>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition cursor-pointer relative"
          >
            {/* Notebook margin line */}
            <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-l-3xl"></div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Global Participation</h3>
            <p className="text-gray-700 leading-relaxed">
              Participants come from multiple countries, representing schools, colleges, and organizations. 
              The championship nurtures international collaboration and showcases the diversity of memory talents worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition cursor-pointer relative"
          >
            {/* Notebook margin line */}
            <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-red-400 to-red-600 rounded-l-3xl"></div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Legacy & Impact</h3>
            <p className="text-gray-700 leading-relaxed">
              Since its inception, the championship has inspired young minds to push cognitive boundaries, 
              develop learning techniques, and achieve excellence in memory mastery. It has become a platform 
              to celebrate mental prowess and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative doodles (like on notebook margins) */}
      <div className="absolute top-10 left-10 text-6xl opacity-20">✏️</div>
      <div className="absolute bottom-10 right-10 text-7xl opacity-20">📚</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-6xl opacity-10">🖍️</div>
    </section>
  );
};
