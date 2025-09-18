import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    { name: "Monica Thomas", role: "Founder Whiteforest Academy", img: "img/monica.png" },
    { name: "Dr. Shashi Tiwari", role: "Memory coach at Whiteforest Academy", img: "img/Dr. Shashi Tiwari.png" },
    { name: "Ms. Sonam Garg", role: "Memory coach at Whiteforest Academy", img: "img/Ms. Sonam Garg.jpg" },
    { name: "Ms. Priya Agarwal", role: "Memory coach at Whiteforest Academy", img: "img/Ms. Priya Agarwal Priya.jpg" },
    { name: "Dr. Shaffy Jain", role: "Memory coach at Whiteforest Academy", img: "img/Dr. Shaffy Jain.png" },
    { name: "Ms. Sonal", role: "Memory coach at Whiteforest Academy", img: "img/Ms. Sonal.png" },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(teamMembers.length / cardsPerSlide);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, position: "absolute" }),
    center: { x: 0, opacity: 1, position: "absolute" },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, position: "absolute" }),
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-[#e0f0ff] to-[#cce0ff] text-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-sky-950">Our Team</h2>
          <p className="text-gray-800 text-lg md:text-2xl">Meet the minds behind our championship</p>
        </motion.div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full h-[300px] sm:h-[340px] md:h-[360px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {teamMembers
                  .slice(current * cardsPerSlide, current * cardsPerSlide + cardsPerSlide)
                  .map((member, index) => (
                    <div
                      key={index}
                      className="bg-white/30 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all hover:shadow-2xl flex flex-col items-center"
                    >
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-40 h-40 mt-6 rounded-full border-4 border-white object-cover"
                      />
                      <div className="p-6 text-center">
                        <h4 className="text-xl font-semibold text-sky-950">{member.name}</h4>
                        <p className="text-gray-700 mt-2 text-sm md:text-base">{member.role}</p>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>

            {/* Arrows slightly up */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-6 top-1/3 bg-white/90 p-3 rounded-full shadow-lg hover:bg-sky-100 transition"
            >
              <ChevronLeft className="w-6 h-6 text-sky-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-6 top-1/3 bg-white/90 p-3 rounded-full shadow-lg hover:bg-sky-100 transition"
            >
              <ChevronRight className="w-6 h-6 text-sky-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
