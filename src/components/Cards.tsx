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
      className="flex flex-row justify-between mb-20 pb-10"
    >
      {OfferCards.map((item) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-[400px] h-[547px] bg-white rounded-3xl shadow-2xl cursor-pointer"
        >
          <img src={item.img} className="p-5" />
          <div className="flex flex-col gap-3 p-5">
            <p className="text-xs font-semibold">{item.name}</p>
            <div className="flex flex-row justify-between">
              <p className="font-bold text-2xl">{item.title}</p>
              <div className="flex flex-row gap-1 justify-center items-center">
                <IoPersonSharp />
                <p>{item.personNumber}</p>
              </div>
            </div>
            <p className="font-normal text-sm">{item.desciption}</p>
            <div className="flex justify-center mt-4">
              <span className="text-3xl font-bold ">{item.price.number}</span>
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
