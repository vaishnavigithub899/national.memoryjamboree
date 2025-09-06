import { motion } from "framer-motion";

export const Benefits = () => {
  const preEventBenefits = [
    "Study material for all disciplines",
    "Training for all memory disciplines",
    "Weekly practice sessions with master trainer",
  ];

  const postEventBenefits = [
    "Participation certificate",
    "Personal athlete ranking",
    "Fun and enriching experience",
  ];

  const athleteBenefits = [
    "Boosts cognitive abilities",
    "Improves learning & focus",
    "Increases confidence & problem-solving",
  ];

  const renderBenefits = (items) =>
    items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-3 w-max"
      >
        <div className="w-7 h-7 flex-shrink-0 bg-yellow-400 text-white rounded-full flex items-center justify-center font-semibold text-sm">
          {index + 1}
        </div>
        <h4 className="text-white text-sm font-medium">{item}</h4>
      </motion.div>
    ));

  return (
    <section className="relative py-12 bg-gradient-to-b from-[#0A1D37] via-[#12355B] to-[#005EB0] text-white">
      <div className="container mx-auto px-4 space-y-8">
        {/* Pre-Event */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-yellow-400 mb-4"> What do you get with the championship registration
          </h2>
        </motion.div>
        <div className="flex flex-wrap gap-3 justify-center">
          {renderBenefits(preEventBenefits)}
        </div>

        {/* Post-Event */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-6"
        >
          
        </motion.div>
        <div className="flex flex-wrap gap-3 justify-center">
          {renderBenefits(postEventBenefits)}
        </div>

        {/* Memory Athlete */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-6"
        >
          <h2 className="text-xl md:text-3xl font-bold text-yellow-400 mb-4">
            Benefits as a Memory Athlete
          </h2>
        </motion.div>
        <div className="flex flex-wrap gap-3 justify-center">
          {renderBenefits(athleteBenefits)}
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex flex-col items-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-yellow-400 mb-4 text-center">
            Your Certification
          </h2>
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden w-64 md:w-80 p-3 cursor-pointer transition-all"
          >
            <img
              src="img/homecertificate.png"
              alt="Certificate"
              className="w-full h-auto object-contain rounded-lg"
            />
            <h3 className="text-white text-base font-semibold mt-3 text-center">
              Official Memory Championship Certificate
            </h3>
            <p className="text-gray-200 text-sm text-center mt-1">
              Recognizing your participation and achievement in the National Memory Championship.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-6 left-6 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-6 right-6 w-24 h-24 bg-green-400 rounded-full blur-2xl opacity-20 animate-bounce"></div>
    </section>
  );
};
