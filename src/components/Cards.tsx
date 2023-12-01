import { OfferCards } from "../utils/constant";
import { IoPersonSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export const Cards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      transition={{ delay: 1, duration: 1.2 }}
      viewport={{ once: false }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row lg:flex-row justify-between mb-8 md:mb-16 lg:mb-20 pb-10"
    >
      {OfferCards.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.05 }}
          className="flex flex-wrap w-full md:w-auto lg:w-[30%] mb-6 md:mb-0 lg:mb-0 md:mr-4 lg:mr-4 bg-white rounded-3xl shadow-2xl cursor-pointer"
        >
          <img
            src={item.img}
            className="p-5 object-cover w-full h-64 md:h-72 lg:h-80"
            alt={item.name}
          />
          <div className="flex flex-col gap-3 p-5">
            <p className="text-xs font-semibold">{item.name}</p>
            <div className="flex flex-row justify-between">
              <p className="font-bold text-xl md:text-2xl lg:text-2xl">
                {item.title}
              </p>
              <div className="flex flex-row gap-1 justify-center items-center">
                <IoPersonSharp />
                <p>{item.personNumber}</p>
              </div>
            </div>
            <p className="font-normal text-sm">{item.desciption}</p>
            <div className="flex justify-center mt-4">
              <span className="text-2xl lg:text-3xl font-bold ">
                {item.price.number}
              </span>
              <span className="font-normal text-sm flex items-end ml-1 mb-1">
                {item.price.text}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
