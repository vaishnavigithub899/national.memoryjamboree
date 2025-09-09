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

  // Split into title + description for hover effect
  const athleteBenefits = [
    {
      title: "Sharper Focus & Faster Learning",
      desc: "Improves concentration and retention of new knowledge.",
    },
    {
      title: "Academic & Professional Edge",
      desc: "Gives a strong advantage in studies, exams, and careers.",
    },
    {
      title: "Confidence & Recognition",
      desc: "Builds self-belief and opens doors to national and international platforms.",
    },
    {
      title: "Stronger Brain Fitness",
      desc: "Keeps the mind active, healthy, and sharp for life.",
    },
    {
      title: "Better Connections & Creativity",
      desc: "Enhances social interactions and frees mental space for innovation.",
    },
  ];

  // Render normal benefits (pre-event, post-event)
  const renderBenefits = (items, startIndex = 0) =>
    items.map((item, index) => (
      <motion.div
        key={startIndex + index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-3 w-max"
      >
        <div className="w-7 h-7 flex-shrink-0 bg-yellow-400 text-white rounded-full flex items-center justify-center font-semibold text-sm">
          {startIndex + index + 1}
        </div>
        <h4 className="text-white text-sm font-medium">{item}</h4>
      </motion.div>
    ));

  // Render athlete benefits with hover expand
  const renderAthleteBenefits = (items) =>
    items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative group bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-start gap-3 w-max"
      >
        {/* Number */}
        <div className="w-7 h-10 flex-shrink-0 bg-yellow-400 text-white rounded-full flex items-center justify-center font-semibold text-sm">
          {index + 1}
        </div>

        {/* Text */}
        <div>
          <h4 className="text-white text-sm font-medium">
            {item.title}
          </h4>
          {/* Description expands only on hover */}
          <p className="text-white/80 text-xs mt-1 overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ));

  return (
    <section className="relative py-17 bg-gradient-to-b from-[#0A1D37] via-[#12355B] to-[#005EB0] text-white">
      <div className="container mx-auto px-4 space-y-8">
        {/* Pre-Event */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-yellow-400 mb-4">
            What do you get with the championship registration
          </h2>
        </motion.div>
        <div className="flex flex-wrap gap-3 justify-center">
          {renderBenefits(preEventBenefits, 0)}
        </div>

        {/* Post-Event */}
        <div className="flex flex-wrap gap-3 justify-center">
          {renderBenefits(postEventBenefits, preEventBenefits.length)}
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
          {renderAthleteBenefits(athleteBenefits)}
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-6 left-6 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-6 right-6 w-24 h-24 bg-green-400 rounded-full blur-2xl opacity-20 animate-bounce"></div>
    </section>
  );
};
