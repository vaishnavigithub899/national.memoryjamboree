import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp, // ✅ added
} from "react-icons/fa";

export const Footer = () => {
  const whatsappNumber = "918810569514"; // ✅ with country code
  const whatsappMessage = encodeURIComponent(
    "Hi, \n\nI want to know more about the upcoming, Memory Jamboree competition."
  );

  return (
    <footer className="bg-gray-900 text-white relative pt-16 pb-10 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-500 rounded-full opacity-20 blur-3xl animate-bounce"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-green-400">
              National Memory Jamboree
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              National Memory Jamboree is an endeavour dedicated to the forest
              of 100 trillion neural connections inside a human brain. It offers
              Brain Training, Memory Mastery and Super Learning skills to
              students, teachers, parents, and professionals. Starting with 1
              student in 2019, over the years WhiteForest has evolved to serve
              and train many schools, colleges, and corporates.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-4">
              {[
                {
                  Icon: FaFacebookF,
                  link: "https://www.facebook.com/WhiteForestAcademy",
                },
                { Icon: FaTwitter, link: "https://twitter.com/YourPage" },
                {
                  Icon: FaInstagram,
                  link: "https://www.instagram.com/whiteforestacademy/",
                },
                {
                  Icon: FaLinkedinIn,
                  link: "https://www.linkedin.com/in/coachmonicathomas/",
                },
              ].map(({ Icon, link }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#FACC15" }}
                  className="text-gray-300 text-lg transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-yellow-400">
              Useful Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              {[
                "Home",
                "Disciplines",
                "Gallery",
                "Categories",
                "Privacy Policy",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-yellow-400">
              Our Location
            </h4>
            <div className="flex items-start gap-3 text-gray-300">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                Whiteforest Academy,
                <br />
                Green Park Extension, New Delhi 110016
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-yellow-400">Contact</h4>
            <div className="flex items-center gap-3 text-gray-300">
              <FaPhone className="mt-1" />
              <p>+91 88105 69514</p>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="mt-1" />
              <p>query@memoryjamboree.com</p>
            </div>
            {/* ✅ WhatsApp */}
            <div className="flex items-center gap-3 text-gray-300">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors"
              >
                <FaWhatsapp className=" text-xl" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm"
        >
          © Copyright NationalChampionship. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
};
