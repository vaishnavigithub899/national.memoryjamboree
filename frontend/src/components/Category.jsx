import { motion } from "framer-motion";

export const Category = () => {
  const categories = [
    { id: 1, title: "Kids (Age 5-12)", img: "src/assets/svg/kids.svg", delay: 0.2 },
    { id: 2, title: "Juniors (Age 13-17)", img: "src/assets/svg/juniors.svg", delay: 0.3 },
    { id: 3, title: "Adults (Age 18-59)", img: "src/assets/svg/adults.svg", delay: 0.4 },
    { id: 4, title: "Seniors (Age 60+)", img: "src/assets/svg/senior.svg", delay: 0.5 },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-[#FFFBEB] via-[#FFF1C2] to-[#FFE082] text-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-md">
              National Memory Championship
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              NMC is the National Cup of Memory Sports where memory athletes from schools and
              cities compete to memorize & recall information under specific guidelines. The first
              championship was held in London in 1991.
            </p>
          </motion.div>

          {/* Right Content - Categories */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-semibold mb-12 text-center text-blue-600"
            >
              Categories of Memory Athletes
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-10">
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, delay: cat.delay }}
                  className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition-all"
                >
                  {/* Animated Image */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-36 h-36 flex items-center justify-center bg-blue-50 rounded-full mb-6 shadow-inner"
                  >
                    <motion.img
                      src={cat.img}
                      alt={cat.title}
                      className="w-28 h-28 object-contain"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-blue-800">{cat.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-pink-200 rounded-full blur-2xl opacity-25 animate-pulse"></div>
    </section>
  );
};
