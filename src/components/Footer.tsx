import { FooterLinks } from "../utils/constant";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <div className="grid grid-cols-2 gap-20 w-[1440px] h-96 mx-auto items-center">
        <div>
          <div className="flex flex-col gap-10">
            <p className="text-4xl font-medium">Newsletter & Special Promo</p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="rounded-l-xl p-5 border border-white outline-none w-[400px] h-16 text-black"
              />
              <button className="bg-[#65AEF2] text-white p-5 text-base rounded-r-xl font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center">
          <img src={logo} className="h-24 w-[300px] bg-white" />
          <div className="grid grid-cols-3 gap-7 items-center justify-center">
            {FooterLinks.map((item) => (
              <a
                href={item.path}
                className="hover:underline hover:text-blue-400"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="justify-center items-center flex py-5">
          © Copyright Booking Hotels. All right reserved.
        </p>
      </div>
    </div>
  );
};
