import { FooterLinks } from "../utils/constant";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 lg:gap-20 w-full md:w-[80%] lg:w-[80%] xl:w-[80%] h-auto md:h-96 mx-auto items-center p-8 md:p-12 lg:p-12 xl:p-12">
        <div>
          <div className="flex flex-col gap-6 md:gap-10">
            <p className="text-xl md:text-2xl lg:text-4xl font-medium">
              Newsletter & Special Promo
            </p>
            <div className="">
              <input
                type="text"
                placeholder="Enter your email"
                className="rounded-l-xl py-3 px-5 text-black/90 md:text-2xl outline-none w-52 md:w-72"
              />
              <button className="py-3 px-5 md:text-2xl bg bg-[#65AEF2] text-white rounded-r-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 justify-center items-center">
          <img
            src={logo}
            className="h-24 md:h-24 w-fit md:w-[300px] bg-white object-contain"
            alt="Logo"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-7 md:gap-3 items-center justify-center text-center md:text-start lg:text-start">
            {FooterLinks.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="hover:underline hover:text-blue-400 text-sm md:text-base lg:text-lg"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center py-5">
        <p className="text-xs md:text-sm lg:text-base">
          © Copyright Booking Hotels. All rights reserved.
        </p>
      </div>
    </div>
  );
};
