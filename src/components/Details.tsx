import { BsCalendar2Date } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { PiBaby } from "react-icons/pi";
import { motion } from "framer-motion";
import "../style/details.scss";
import { Parallax } from "react-scroll-parallax";

export const Details = () => {
  return (
    <Parallax translateX={["-50px", "200px"]}>
      <motion.div
        className="bg-[#E9F3F6] rounded-3xl lg:w-[1194px] md:w-[600px] w-[300px] h-auto md:h-auto lg:h-80 my-16 mx-auto"
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 2.3 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 font-extrabold">
          <div className="flex justify-center">
            <div className="flex flex-col font-medium justify-center items-center mt-6">
              <p className="text-2xl md:2xl lg:3xl">Book a Room</p>
              <p className="text-base">Discover the perfect space for you!</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row gap-3 md:gap-4 lg:gap-8 items-center justify-center my-7">
            <div className="flex flex-col gap-3">
              <p>Date</p>
              <motion.div className="date-person-section">
                <BsCalendar2Date className="text-2xl" />
                <p className="text-lg">Check Available</p>
              </motion.div>
            </div>

            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              <p>Person</p>
              <div className="date-person-section">
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

            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
              <p className="text-[#E9F3F6]">.</p>
              <button className="button">BOOK NOW</button>
            </div>
          </div>
        </div>
      </motion.div>
    </Parallax>
  );
};
