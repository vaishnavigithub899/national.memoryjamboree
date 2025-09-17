import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";

export const Connect_with_us = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#EAF0F8] to-[#D6E0F5] text-sky-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#3b82f6] drop-shadow-md">
            🎒 Connect With Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Got questions or ideas? Let’s team up and make learning more fun! ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-dashed border-sky-300 relative"
          >
            {/* Cute doodle icon */}
            <div className="absolute -top-8 -right-6 text-5xl rotate-12">✏️</div>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 font-bold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-2 border-sky-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-800 bg-[#F0F4FF]"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-2 border-sky-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-800 bg-[#F0F4FF]"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-1">School Name</label>
                <input
                  type="text"
                  placeholder="Your School"
                  className="w-full border-2 border-sky-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-800 bg-[#F0F4FF]"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-1">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full border-2 border-sky-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-800 bg-[#F0F4FF] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#3b82f6] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform w-full"
              >
                🚀 Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl shadow-xl p-6 border-l-8 border-sky-800 relative">
              <div className="absolute -top-6 -left-4 text-4xl">📚</div>
              <h3 className="text-xl font-extrabold mb-2 text-sky-900">
                Contact Info
              </h3>
              <p><span className="font-semibold">📧 Email:</span> query@memoryjamboree.com</p>
              <p><span className="font-semibold">📞 Phone:</span> +91 88105 69514</p>
              <p><span className="font-semibold">📍 Address:</span> Whiteforest Academy, Green Park Extension, New Delhi 110016</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 border-l-8 border-sky-600 relative">
              <div className="absolute -top-6 -left-4 text-4xl">🎨</div>
              <h3 className="text-xl font-extrabold mb-2 text-sky-900">
                Follow Us
              </h3>
              <div className="flex gap-6 text-3xl">
  <a
    href={`https://wa.me/918810569514?text=${encodeURIComponent(
      "Hi,\nWe want to register as a school group. Kindly let us know the process."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 transition-transform text-green-500"
  >
    <FaWhatsapp />
  </a>
  <a
    href="https://www.instagram.com/whiteforestacademy/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 transition-transform text-pink-500"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.facebook.com/WhiteForestAcademy"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 transition-transform text-blue-600"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.youtube.com/@WhiteForestAcademy"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 transition-transform text-red-600"
  >
    <FaYoutube />
  </a>
  <a
    href="https://www.linkedin.com/in/coachmonicathomas/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 transition-transform text-blue-700"
  >
    <FaLinkedin />
  </a>
</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative funky blobs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-30 animate-bounce"></div>
      <div className="absolute bottom-16 right-10 w-24 h-24 bg-indigo-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-sky-400 rounded-full blur-xl opacity-30 animate-spin"></div>
    </section>
  );
};
