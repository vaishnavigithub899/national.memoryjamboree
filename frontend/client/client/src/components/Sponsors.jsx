import { motion } from "framer-motion";

export const Sponsors = () => {
  const sponsors = [
    {
      name: "Gravit Infosystems",
      link: "https://gravitinfosystems.com/",
      img: "img/GravityInfoSystem.png",
    },
    // Add more sponsors here
  ];

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-[#fefcf5] to-[#f6f0e5]"
      id="clients"
    >
      {/* Decorative floating circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-20 animate-bounce"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Partners & Sponsors
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-12">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-40 h-40 transition-all cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className="max-h-24 object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
