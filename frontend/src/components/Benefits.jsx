import { motion } from "framer-motion";

export const Benefits = () => {
  const preEventBenefits = [
    "Study material for all disciplines",
    "Training for all memory disciplines",
    "Weekly practice sessions with master trainer",
    "Participation certificate",
    "Personal athlete ranking",
  ];

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

  // Render Pre-Event Benefits
  const renderBenefits = (items, startIndex = 0) =>
    items.map((item, index) => (
      <motion.div
        key={startIndex + index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm flex items-center gap-3 w-fit"
      >
        <div className="w-9 h-9 flex-shrink-0 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-lg">
          {startIndex + index + 1}
        </div>
        <h4 className="text-white text-lg font-medium">{item}</h4>
      </motion.div>
    ));

  // Render Athlete Benefits
  const renderAthleteBenefits = (items) =>
    items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm flex items-start gap-3 w-fit"
      >
        {/* Number */}
        <div className="w-9 h-9 flex-shrink-0 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-lg">
          {index + 1}
        </div>

        {/* Text */}
        <div>
          <h4 className="text-white text-lg font-medium">{item.title}</h4>
          <p className="text-white/80 text-sm mt-1">{item.desc}</p>
        </div>
      </motion.div>
    ));

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#0A1D37] via-[#12355B] to-[#005EB0] text-white">
      <div className="container mx-auto px-6 space-y-10">
        {/* Pre-Event */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
            What do you get with the championship registration
          </h2>
        </motion.div>

        {/* Pre-event cards in 3 + 2 layout */}
        <div className="flex flex-wrap justify-center gap-5">
          {renderBenefits(preEventBenefits.slice(0, 3), 0)}
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {renderBenefits(preEventBenefits.slice(3), 3)}
        </div>

        {/* Athlete Benefits */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <h2 className="text-3xl md:text-3xl font-bold text-yellow-400 mb-6">
            Benefits as a Memory Athlete
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-5">
          {renderAthleteBenefits(athleteBenefits)}
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-6 left-6 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-6 right-6 w-24 h-24 bg-green-400 rounded-full blur-2xl opacity-20 animate-bounce"></div>
    </section>
  );
};
