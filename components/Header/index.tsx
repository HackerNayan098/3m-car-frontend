"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 300) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full text-white z-50 ${
          scrolled && "bg-[#323232]"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-4">
            <div className="text-2xl">Logo</div>
            <div>
              <div className="hidden lg:flex gap-4 text-sm font-medium">
                <Link
                  href={"/"}
                  className={`${
                    pathname === "/" ? "text-red-600" : "text-white"
                  } hover:text-red-600`}
                >
                  Home
                </Link>
                <Link
                  href={"/about-us"}
                  className={`${
                    pathname === "/about-us" ? "text-red-600" : "text-white"
                  } hover:text-red-600`}
                >
                  About Us
                </Link>
                <div
                  className={`${
                    pathname === "/services" ? "text-red-600" : "text-white"
                  } hover:text-red-600`}
                >
                  Services
                </div>
                <Link
                  href={"/blog"}
                  className={`${
                    pathname === "/blog" ? "text-red-600" : "text-white"
                  } hover:text-red-600`}
                >
                  Blog
                </Link>
                <Link
                  href={"/contact-us"}
                  className={`${
                    pathname === "/contact-us" ? "text-red-600" : "text-white"
                  } hover:text-red-600`}
                >
                  Contact Us
                </Link>
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="max-h-8 max-w-8 h-8 w-8 block lg:hidden relative overflow-hidden cursor-pointer border border-gray-200 rounded"
              >
                <div
                  className={`bg-black h-0.5 rounded transition-all absolute left-1/2 -translate-x-1/2 origin- ${
                    isOpen ? "rotate-45 w-3/4 top-[47%]" : "w-3/5 top-2"
                  }`}
                ></div>
                <div
                  className={`bg-black h-0.5 rounded transition-all -translate-y-1/2 absolute top-1/2 w-3/5 ${
                    isOpen ? "left-full" : "left-1/2 -translate-x-1/2"
                  }`}
                ></div>
                <div
                  className={`bg-black h-0.5 origin-bottom rounded absolute right-1/2 translate-x-1/2 transition-all ${
                    isOpen
                      ? "rotate-[315deg] w-3/4 bottom-[47%]"
                      : "w-3/5 bottom-2"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
