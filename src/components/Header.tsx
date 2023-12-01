import { motion } from "framer-motion";
import { allHeaderItems } from "../utils/constant";
import logo from "../assets/logo.png";
import "../style/banner.scss";

export const Header = () => {
  return (
    <header className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white flex  md:flex-row lg:flex-row justify-evenly text-black text-base md:text-base lg:text-lg font-normal z-10 rounded-2xl lg:w-[60%] md:w-[80%] w-[90%] h-auto md:h-16 lg:h-20">
      {allHeaderItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {item.title === "logo" ? (
            <img
              src={logo}
              alt="Logo"
              className="md:h-18 md:w-36 lg:h-24 lg:w-44 h-14 w-28 object-fill"
            />
          ) : (
            <a className="cursor-pointer hover:text-blue-500 text-base">
              {item.title}
            </a>
          )}
        </motion.div>
      ))}
    </header>
  );
};
