import { BsCalendar2Date } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { PiBaby } from "react-icons/pi";
import { motion } from "framer-motion";
import "../style/details.scss";

export const Details = () => {
  return (
    <motion.div
      className="bg-[#E9F3F6] rounded-3xl h-auto md:h-auto lg:h-80 my-16 mx-auto w-[75%] md:w-[70%] lg:w-[70%]"
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
            <label htmlFor="date">Date</label>
            <div className="date-person-section">
              <BsCalendar2Date className="text-2xl" />
              <p className="text-lg">Check Available</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p>Person</p>
            <div className="bg-white rounded-2xl px-8 py-4 cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:items-start ">
                <div className="flex flex-row gap-3 justify-center items-center-center">
                  <IoPersonSharp className="text-2xl" />
                  <p className="text-lg">Adults</p>
                  <select className="text-lg">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div className="flex flex-row gap-3 justify-center items-center-center">
                  <PiBaby className="text-3xl" />
                  <p className="text-lg">Children</p>
                  <select className="text-lg">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
            <p className="text-[#E9F3F6]">.</p>
            <button className="button">BOOK NOW</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
