import { MdLocationOn } from "react-icons/md";
import bg from "@/images/footer-bg.jpg";
import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bg-black/90 relative">
      <img
        src={bg.src}
        alt="Footer BG"
        className="absolute top-0 left-0 h-full w-full -z-10 object-cover"
      />
      <div className="container mx-auto pt-12 px-4 text-[#999999]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl text-white font-semibold">LOGO</div>
            <p className="text-sm my-4">
              We provide everything you need to build an amazing dealership
              website developed especially for car sellers dealers or auto motor
              retailers.
            </p>
            <div className="flex gap-2 items-start my-4">
              <div>
                <MdLocationOn size={15} />
              </div>
              <p className="text-sm">
                3M Car Care Thane, Shop no. 2, Hill Chest, Manpada Chitalsar
                Naka, Manpada: 400 607
              </p>
            </div>
            <div className="flex gap-2 items-center my-4">
              <div>
                <FaPhone size={15} />
              </div>
              <p className="text-sm">+91 9967154234</p>
            </div>
            <div className="flex gap-2 items-center my-4">
              <div>
                <GoMail size={15} />
              </div>
              <p className="text-sm">sheshadri@contactxindia.com</p>
            </div>
          </div>
          <div>
            <h2 className="uppercase font-semibold relative text-white pb-3 mb-6">
              Useful Links
              <span className="absolute bottom-0 h-0.5 w-6 left-0 bg-red-600"></span>
            </h2>
            <div>
              {[1, 2, 3, 4, 5].map((l) => {
                return (
                  <Link
                    key={l}
                    href="/"
                    className="flex gap-2 items-center border-b border-white/15 text-[#999999] hover:text-red-600 text-sm py-3"
                  >
                    <FiChevronsRight size={16} />
                    <span>Car Detailing</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="uppercase font-semibold relative text-white pb-3 mb-6">
              Useful Links
              <span className="absolute bottom-0 h-0.5 w-6 left-0 bg-red-600"></span>
            </h2>
            <div>
              {[1, 2, 3, 4, 5].map((l) => {
                return (
                  <Link
                    key={l}
                    href="/"
                    className="flex gap-2 items-center border-b border-white/15 text-[#999999] hover:text-red-600 text-sm py-3"
                  >
                    <FiChevronsRight size={16} />
                    <span>Car Detailing</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="uppercase font-semibold relative text-white pb-3 mb-6">
              Location
              <span className="absolute bottom-0 h-0.5 w-6 left-0 bg-red-600"></span>
            </h2>
            <div></div>
          </div>
        </div>
        <div className="py-4 border-t border-white/15">
          <p className="text-center text-[#999999] text-xs">
            © Copyright 2022 3M Car Care
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
