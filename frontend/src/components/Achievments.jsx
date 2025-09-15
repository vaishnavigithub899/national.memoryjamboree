import { motion } from "framer-motion";

export const Achievements = () => {
  // School logos with online URLs
  const topSchools = [
    { name: "Guru Harkrishan Public School, Shahdara, Delhi", logo: "https://www.schoolmykids.com/smk-media/2018/10/Guru-Harkrishan-Public-School-Shahdara-Delhi.png" },
    { name: "Colonel Satsangi's Kiran Memorial Public School, Chattarpur, New Delhi", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DKO33H3V7u85HK-1bwbMykyZVjhnzm9VeQ&s" },
    { name: "Maxfort School, Rohini, Delhi", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcl1XPKv1Coymmia9WWGh327VFsUx1ykY7A&s" },
    { name: "St Mary Senior Secondary School, Mayur Vihar Phase 3, Delhi", logo: "https://play-lh.googleusercontent.com/-p5W4c3rn79o01Rdq3a5Dfk3OGsOJcYEKjVXZ-p9Nj-xcBfFQJuWxVlKh8ASC-8eckE" },
    { name: "Amity International school sector 6 Vasundhara Ghaziabad Uttar Pradesh", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRt8BCVh0qKGtee7ecuQSJZtDc2WOFvYMOqg&s" },
    { name: "Delhi Public School, Delhi NCR", logo: "https://dpsjhakri.com/images/Bgphotos/dps_logo.jpg" },
    { name: "Ambience Public School, Safdarjung Enclave, Delhi", logo: "https://c9.shauryasoft.com/media/bny-wlg-2410141309-1382812852-8.png" },
    { name: "Lotus Valley international School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTnYW6FjlKz-_5DCvBMfrFFLVIxPSLrVE5w&s" },
    { name: "St. Mary’s School, Safdarjung Enclave, Delhi", logo: "https://images.uniapply.com/uploads/college/image/logo/2188/webp/St_Marys_School_1944_Logo_1.webp" },
    { name: "DL DAV MODEL SCHOOL PITAMPURA", logo: "https://delhischoolsdirectory.com/assets/upload/profileimg/PRFIMGUSR54021667539348.png" },
    { name: "Gyanshree school , Noida", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RGykDyH7gXX6UJccfMs7umA3xHj73Ard6Q&s" },
    { name: "Arwachin international school", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KMSH2btgazMsMqFRdtsVCIHnBrLI1ZIvJA&s" },
    { name: "Holy Angels School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eHSsDe3u9HNhXCuNGinEL8LrnIkI6DNhHw&s" },
    { name: "Mount Abu Public School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7RPtCwPcW5Wa6pdOyl1NOns1Mmmb29XlNQ&s" },
    { name: "Parevartan School, Rajnagar Extension Ghaziabad", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmU_qBCwxyYO7Dl_ethxt86HZSeJdSvnhqTg&s" },
    { name: "Queen Mary's school Northend Model Town", logo: "https://www.qmsmodeltown.com/image/schoollogo.png" },
    { name: "Silverline Prestige School, Ghaziabad", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJhRgqD-pp_LnBQ8d--4ptodvXnf4H8bMkA&s" },
    { name: "Vivekananda School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVC3FJVHUACwR3V1By57lqlWpqmD9kf8IcQ&s" },
  ];

  // Animation Variants
  const popUpContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-8">
            Students From Top Schools Who Have Trained For <span className="text-orange-600">Memory Jamboree </span>in the past.
          </h2>
        </motion.div>

        {/* School Cards */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={popUpContainer}
          initial="hidden"
          whileInView="visible"
        >
          {topSchools.map((school, index) => (
            <motion.div
              key={index}
              variants={popUpItem}
              className="rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow p-4 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
                <img src={school.logo} alt={school.name} className="object-contain w-20 h-20" />
              </div>
              <h3 className="font-semibold text-sm text-sky-950">{school.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 mb-4">Want to see your school here?</p>
          <button className="text-orange-600 hover:text-orange-700 font-semibold underline text-lg">
            Register your school today for FREE →
          </button>
        </motion.div>
      </div>
    </div>
  );
};
