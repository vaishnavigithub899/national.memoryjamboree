import { useState } from "react";
import { motion } from "framer-motion";

export const Achievements = () => {
  const upcomingSchools = [
    { name: "Guru Harkrishan Public School, Shahdara, Delhi", logo: "https://www.schoolmykids.com/smk-media/2018/10/Guru-Harkrishan-Public-School-Shahdara-Delhi.png" },
    { name: "Colonel Satsangi's Kiran Memorial Public School, Chattarpur, New Delhi", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DKO33H3V7u85HK-1bwbMykyZVjhnzm9VeQ&s" },
    { name: "Maxfort School, Rohini, Delhi", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcl1XPKv1Coymmia9WWGh327VFsUx1ykY7A&s" },
    { name: "St Mary Senior Secondary School, Mayur Vihar Phase 3, Delhi", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWect3ImWfq2UZGcAYel0kRmOOpbTIb8EmA&s" },
    { name: "Ambience Public School, Safdarjung Enclave, Delhi", logo: "https://c9.shauryasoft.com/media/bny-wlg-2410141309-1382812852-8.png", images: ["./img/masonry-portfolio/img1.jpg", "./img/masonry-portfolio/img2.jpg"] },
    { name: "Amity International school sector 6 Vasundhara Ghaziabad Uttar Pradesh", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRt8BCVh0qKGtee7ecuQSJZtDc2WOFvYMOqg&s", images: ["./img/masonry-portfolio/img3.jpeg"] },
    { name: "Arwachin international school", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KMSH2btgazMsMqFRdtsVCIHnBrLI1ZIvJA&s", images: ["./img/masonry-portfolio/img4.jpeg"] },
    { name: "Delhi Public School, Delhi NCR", logo: "https://dpsjhakri.com/images/Bgphotos/dps_logo.jpg", images: ["./img/masonry-portfolio/img5.jpeg"] },
    { name: "Holy Angels School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eHSsDe3u9HNhXCuNGinEL8LrnIkI6DNhHw&s", images: ["./img/masonry-portfolio/img6.jpg"] },
    { name: "Lotus Valley international School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTnYW6FjlKz-_5DCvBMfrFFLVIxPSLrVE5w&s", images: ["./img/masonry-portfolio/img7.jpeg"] },
    { name: "Mount Abu Public School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7RPtCwPcW5Wa6pdOyl1NOns1Mmmb29XlNQ&s", images: ["./img/masonry-portfolio/img8.jpeg"] },
    { name: "Parevartan School, Rajnagar Extension Ghaziabad", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmU_qBCwxyYO7Dl_ethxt86HZSeJdSvnhqTg&s", images: ["./img/masonry-portfolio/Lotus.jpeg"] },
    { name: "Vivekananda School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVC3FJVHUACwR3V1By57lqlWpqmD9kf8IcQ&s", images: ["./img/masonry-portfolio/img10.jpg"] },
    { name: "DPS IndiraPuram", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvRCwY4SruiFvNsk7rW4gdCNTdsXJJwSm6Q&s", images: ["./img/masonry-portfolio/img11.jpg"] },
    { name: "DPSG Meerut Road", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwD0Cz4gIyXU0-P0ZQipHnAJKUpKGtDmyRwA&s", images: ["./img/masonry-portfolio/img12.jpeg"] },
  ];

  const [selectedSchool, setSelectedSchool] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (selectedSchool && selectedSchool.images) setCurrentImage((prev) => (prev + 1) % selectedSchool.images.length);
  };

  const prevImage = () => {
    if (selectedSchool && selectedSchool.images) setCurrentImage((prev) => (prev === 0 ? selectedSchool.images.length - 1 : prev - 1));
  };

  const SchoolCard = ({ school }) => (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="rounded-lg bg-white shadow-md p-4 text-center cursor-pointer"
      onClick={() => (school.images ? setSelectedSchool(school) && setCurrentImage(0) : null)}
    >
      <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
        <img src={school.logo} alt={school.name} className="object-contain w-20 h-20" />
      </div>
      <h3 className="font-semibold text-sm text-sky-950">{school.name}</h3>
    </motion.div>
  );

  const SchoolGrid = () => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {upcomingSchools.map((school, index) => (
        <SchoolCard key={index} school={school} />
      ))}
    </div>
  );

  return (
    <div className="py-20 bg-gradient-to-b from-[#fdfaf5] to-[#f6f0e5] relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-8">
          Participation Of Students From <span className="text-orange-600">Top Schools</span>
        </h2>

        <SchoolGrid />

        {selectedSchool && selectedSchool.images && (
          <div className="fixed top-1/2 left-1/2 w-[90%] max-w-2xl bg-white shadow-2xl rounded-lg p-6 z-50 transform -translate-x-1/2 -translate-y-1/2 border border-gray-200">
            <div className="relative w-full h-56 mb-4">
              <img src={selectedSchool.images[currentImage]} alt="Event" className="w-full h-56 object-cover rounded-lg" />
              {selectedSchool.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded-full">◀</button>
                  <button onClick={nextImage} className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded-full">▶</button>
                </>
              )}
            </div>

            <div className="flex flex-col items-center">
              <img src={selectedSchool.logo} alt={selectedSchool.name} className="w-20 h-20 rounded-full object-contain mb-3" />
              <h2 className="text-xl font-bold text-sky-950 mb-2">{selectedSchool.name}</h2>
              <button onClick={() => setSelectedSchool(null)} className="mt-6 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
