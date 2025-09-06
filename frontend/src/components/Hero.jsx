import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Pencil, GraduationCap } from "lucide-react";

const Hero = () => {
  const eventDate = new Date(2025, 9, 25, 0, 0, 0);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const difference = eventDate - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-yellow-50 to-green-100 text-center overflow-hidden font-sans">
      {/* Decorative doodles */}
      <div className="absolute top-10 left-10 text-blue-500 opacity-30 animate-bounce">
        <BookOpen size={60} />
      </div>
      <div className="absolute bottom-16 right-12 text-yellow-500 opacity-40 animate-bounce">
        <Pencil size={70} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-red-500 opacity-30 animate-bounce">
        <GraduationCap size={80} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        {/* Event Tag */}
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-6 py-2 rounded-full bg-yellow-300/80 text-blue-900 font-bold shadow-md"
        >
          🎓 School National Event | 25th Oct 2025
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-5xl md:text-7xl font-extrabold text-blue-800 drop-shadow-lg"
        >
          Memory Championship 2025
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 max-w-2xl text-lg md:text-2xl text-gray-700 font-medium"
        >
          A fun-filled competition of <span className="text-red-500">intelligence</span> &{" "}
          <span className="text-green-600">memory power</span> for students!
        </motion.p>

        {/* Countdown (chalkboard style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex gap-6 md:gap-12 justify-center bg-green-900 text-white rounded-2xl p-6 shadow-xl border-4 border-yellow-400"
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <span className="block text-4xl md:text-6xl font-extrabold text-yellow-300">
                {item.value}
              </span>
              <span className="text-sm uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-6"
        >
          <a
            href="/register"
            className="bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-500 transition transform hover:scale-110"
          >
            ✏️ Register Now
          </a>
          <a
            href="#about"
            className="bg-blue-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-110"
          >
            📚 Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
