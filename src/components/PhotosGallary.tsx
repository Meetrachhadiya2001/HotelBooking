import { photoData } from "../utils/constant";
import { motion } from "framer-motion";

export const PhotosGallery = () => {
  return (
    <div className="grid grid-cols-3 gap-10 my-16 px-64 p-20 bg-[#F3F3F3]">
      {photoData.map((photo, index) => (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          key={index}
          className={
            index === 0 ? "relative row-span-2" : "relative col-span-1"
          }
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={photo.src}
            alt={`Photo ${index + 1}`}
            className="object-cover cursor-pointer"
          />
          <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold text-center">
            {photo.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
