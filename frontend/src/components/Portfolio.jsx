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
      className="py-20 bg-gradient-to-b from-[#f0f4f8] to-[#d9e2ec] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-950 text-center mb-12">
          Impressions Of Our Past Events
        </h2>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: portfolioImages.length * 2,
                ease: "linear",
              },
            }}
          >
            {portfolioImages.concat(portfolioImages).map((src, index) => (
              <div key={index} className="min-w-[calc(33.333%-1rem)] rounded-xl shadow-lg overflow-hidden">
                <img
                  src={src}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-60 object-cover sm:h-64 md:h-56 lg:h-60"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
