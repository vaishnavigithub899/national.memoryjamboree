import { motion } from "framer-motion";

export const Achievements = () => {
  // Media logos with online URLs
  const mediaLogos = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisx4yvCzQGHDguabQMCg9ZdokDd3hID74wg&s", alt: "Times of India" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Kth4Er3tYfIlEPhGpBxH2QO9Zzi90tij9Q&s", alt: "Business Standard" },
    { src: "https://img.freepik.com/premium-vector/tv-channel-logo-design-concept-vector-illustration_875240-84.jpg", alt: "Daily Hunt" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png", alt: "Aaj Tak" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/48/ABP_News_logo.svg", alt: "ABP News" },
  ];

  // School logos with online URLs
  const topSchools = [
    { name: "Ryan Global School", logo: "https://t4.ftcdn.net/jpg/04/91/76/63/360_F_491766301_yF6pxwvJnyY4I43PlU6zPEPoY5ZjJLEL.jpg" },
    { name: "RBK International School", logo: "https://media.licdn.com/dms/image/v2/C560BAQF_A8LeRkxnqQ/company-logo_200_200/company-logo_200_200/0/1631377069034?e=2147483647&v=beta&t=eO4-LslgXiM107BqpJKC6rmZF_tznPeSkP_GkPaX9ic" },
    { name: "CP Goenka International", logo: "https://upload.wikimedia.org/wikipedia/en/9/96/CP_Goenka_International_School.jpg" },
    { name: "Witty International School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbpETGhQvFBrwTQ1edeOC_d1HIWZE_sjjBw&s" },
    { name: "N.L. Dalmia High School", logo: "https://mumbaischooldirectory.com/assets/upload/profileimg/PRFIMGUSR35801691049017.png" },
    { name: "Seven Square Academy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-8cJ3bShpE4Fq_WbH2B4cbb8uqRjoKRpdw&s" },
  ];

  // Animation Variants
  const popUpContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each image
      },
    },
  };

  const popUpItem = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } },
  };

  return (
    <div className="py-20 bg-gradient-to-b from-[#fdfaf5] to-[#f6f0e5]">
      <div className="container mx-auto px-4 text-center">
        {/* Featured in Media */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-4">
            Featured In Leading Media
          </h2>
          <p className="text-gray-600 mb-12">
            WMC has been recognized and covered by major media outlets worldwide
          </p>
        </motion.div>

        {/* Media Logos with Pop Up */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center mb-16"
          variants={popUpContainer}
          initial="hidden"
          whileInView="visible"
        >
          {mediaLogos.map((logo, index) => (
            <motion.div key={index} variants={popUpItem} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-32 w-auto hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Top Schools */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-8">
            Top Schools Trained For <span className="text-orange-600">Memory Championship</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={popUpContainer}
          initial="hidden"
          whileInView="visible"
        >
          {topSchools.map((school, index) => (
            <motion.div key={index} variants={popUpItem} className="rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100">
                <img src={school.logo} alt={school.name} className="object-contain w-28 h-28" />
              </div>
              <h3 className="font-semibold text-lg text-sky-950">{school.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <p className="text-gray-600 mb-4">Want to see your school here?</p>
          <button className="text-orange-600 hover:text-orange-700 font-semibold underline text-lg">
            Register your school today for FREE →
          </button>
        </motion.div>
      </div>
    </div>
  );
};
