import { Cards } from "./Cards";
import { motion } from "framer-motion";

export const OfferPage = () => {
  return (
    <div className="bg-white lg:bg-gradient-to-b lg:from-white lg:to-gray-300 mt-12 md:mt-16 lg:mt-24 ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        transition={{ delay: 0, duration: 1 }}
        viewport={{ once: false }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col gap-8 md:gap-12 lg:gap-20 w-full md:w-[80%] lg:w-[70%] xl:w-[1320px] mx-auto"
      >
        <div className="flex flex-col gap-7">
          <p className="font-medium text-xl md:text-2xl lg:text-3xl text-[#65AEF2]">
            Special Offers
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
            <p className="font-medium text-3xl md:text-4xl lg:text-6xl">
              Best offer of the month
            </p>
            <p className="font-normal text-lg md:text-xl lg:text-2xl text-[#65AEF2] cursor-pointer hover:underline">
              View all
            </p>
          </div>
          <p className="w-full md:w-9/12 lg:w-6/12 font-normal text-base md:text-lg lg:text-xl">
            Experience Fantastic Benefits and Obtain Better Rates When You Make
            a Direct Booking on Our Official Website
          </p>
        </div>
        <Cards />
      </motion.div>
    </div>
  );
};
