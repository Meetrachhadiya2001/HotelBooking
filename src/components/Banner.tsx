import { motion } from "framer-motion";
import bannerImg from "../assets/bannerImg.png";
import { allHeaderItems } from "../utils/constant";
import logo from "../assets/logo.png";
import "../style/banner.scss";

export const Banner = () => {
  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="header">
        {allHeaderItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {item.title === "logo" ? (
              <img src={logo} alt="Logo" className="h-24 w-44 object-fill" />
            ) : (
              <a className="cursor-pointer hover:text-blue-500">{item.title}</a>
            )}
          </motion.div>
        ))}
      </header>

      <div className="relative">
        <motion.img
          src={bannerImg}
          className="lg:h-[658px] md:h-[500px] h-[450px] w-full object-cover"
          alt="Banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <div className="dicover-text">
          <div className="font-bold text-3xl md:text-4xl lg:text-6xl">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1.3 }}
            >
              Discover Extraordinary
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1.2 }}
            >
              Comfort in Hotels
            </motion.h1>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-[#003465]/[0.6] to-transparent"
      />
    </motion.div>
  );
};
