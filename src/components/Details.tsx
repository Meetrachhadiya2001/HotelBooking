import { BsCalendar2Date } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { PiBaby } from "react-icons/pi";
import { motion } from "framer-motion";

export const Details = () => {
  return (
    <motion.div
      className="bg-[#E9F3F6] rounded-3xl w-[1194px] h-80 my-16 mx-auto"
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, delay: 2.3 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col gap-8 font-extrabold">
        <div className="flex justify-center">
          <div className="flex flex-col font-medium justify-center items-center mt-6">
            <p className="text-3xl">Book a Room</p>
            <p className="text-base">Discover the perfect space for you!</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-8 items-center justify-center mt-7">
          <div className="flex flex-col gap-3">
            <p>Date</p>
            <motion.div className="flex flex-row gap-3 items-center justify-center bg-white rounded-2xl px-8 py-4 cursor-pointer hover:text-white hover:bg-[#65AEF2]">
              <BsCalendar2Date className="text-2xl" />
              <p className="text-lg">Check Available</p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <p>Person</p>
            <div className="flex flex-row gap-3 items-center justify-center bg-white rounded-2xl px-8 py-4 cursor-pointer hover:text-white hover:bg-[#65AEF2]">
              <IoPersonSharp className="text-2xl" />
              <p className="text-lg">Adults</p>
              <p className="text-lg">2</p>
              <FaChevronDown />
              <PiBaby className="text-3xl" />
              <p className="text-lg">Children</p>
              <p className="text-lg">0</p>
              <FaChevronDown />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#E9F3F6]">.</p>
            <button className="w-52 h-14 bg-[#65AEF2] hover:text-[#65AEF2] hover:bg-white text-white text-2xl font-bold rounded-2xl cursor-pointer">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
