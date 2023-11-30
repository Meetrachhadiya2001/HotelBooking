import { Cards } from "./Cards";
import { motion } from "framer-motion";

export const OfferPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-300 mt-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        transition={{ delay: 0, duration: 1 }}
        viewport={{ once: false }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col gap-20 w-[1320px] mx-auto"
      >
        <div className="flex flex-col gap-7">
          <p className="font-medium text-3xl text-[#65AEF2]">Special Offers</p>
          <div className="flex flex-row justify-between">
            <p className="font-medium text-6xl">Best offer of the month</p>
            <p className="font-normal text-2xl text-[#65AEF2] items-center justify-center flex cursor-pointer hover:underline">
              View all
            </p>
          </div>
          <p className="w-6/12 font-normal text-xl">
            Experience Fantastic Benefits and Obtain Better Rates When You Make
            a Direct Booking on Our Official Website
          </p>
        </div>
        <Cards />
      </motion.div>
    </div>
  );
};
