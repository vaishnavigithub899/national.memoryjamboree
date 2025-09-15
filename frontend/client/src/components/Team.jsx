import { motion } from "framer-motion";

export const Team = () => {
  const teamMembers = [
    {
      name: "Monica Thomas",
      role: "Chief Executive Officer",
      img: "img/monica.png",
    },
    {
      name: "Sachin Tanwar",
      role: "Founder: Genius Kid",
      img: "img/SachinTanwar.jpeg",
    },
    {
      name: "Dr. Deepa Goyal",
      role: "Record Holder | Founder: The Skill Station",
      img: "img/Deepa_Goyal.jpeg",
    },
  ];

  return (
    <section
      id="team"
      className="relative py-20 bg-gradient-to-b from-[#e0f0ff] to-[#cce0ff] text-gray-900 overflow-hidden"
    >
      {/* Decorative floating blobs */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-20 animate-bounce"></div>

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-sky-950">
            Our Team
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Meet the minds behind our championship
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white/30 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all hover:shadow-2xl"
            >
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-48 h-48 mx-auto mt-6 rounded-full border-4 border-white object-cover"
                whileHover={{ scale: 1.1 }}
              />
              <div className="p-6 text-center">
                <motion.h4
                  className="text-xl font-semibold text-sky-950"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h4>
                <motion.p
                  className="text-gray-700 mt-2 text-sm md:text-base"
                  whileHover={{ scale: 1.02 }}
                >
                  {member.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
