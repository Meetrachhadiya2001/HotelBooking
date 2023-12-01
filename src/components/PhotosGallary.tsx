import { photoData } from "../utils/constant";
import { motion } from "framer-motion";

export const PhotosGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  lg:my-16 px-10 md:px-50 lg:px-64 p-20 bg-[#F3F3F3]">
      {photoData.map((photo, index) => (
        <motion.div
          key={index}
          className={
            index === 0 ? "relative row-span-2" : "relative col-span-1"
          }
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={photo.src}
            alt={`Photo ${index + 1}`}
            className="w-full h-full cursor-pointer flex justify-center"
          />
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl md:text-xl lg:text-2xl font-bold text-center">
            {photo.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
