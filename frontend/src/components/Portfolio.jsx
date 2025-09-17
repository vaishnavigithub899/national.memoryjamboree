import { motion } from "framer-motion";

export const Portfolio = () => {
  const portfolioImages = [
    "img/masonry-portfolio/img1.jpg",
    "img/masonry-portfolio/img2.jpg",
    "img/masonry-portfolio/img3.jpeg",
    "img/masonry-portfolio/img4.jpeg",
    "img/masonry-portfolio/img5.jpeg",
    "img/masonry-portfolio/img6.jpg",
    "img/masonry-portfolio/img7.jpeg",
    "img/masonry-portfolio/img8.jpeg",
    "img/masonry-portfolio/Lotus.jpeg",
    "img/masonry-portfolio/img10.jpg",
    "img/masonry-portfolio/img11.jpg",
    "img/masonry-portfolio/img12.jpeg",
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-[#f0f4f8] to-[#d9e2ec]"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950">
            Impressions Of World Memory Championship 2024
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <img
                src={src}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-60 object-cover sm:h-64 md:h-56 lg:h-60"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
