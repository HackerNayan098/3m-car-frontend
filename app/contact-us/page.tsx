"use client";
import bg from "@/images/road-bg.jpg";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="bg-cover bg-center bg-no-repeat h-[300px]"
      >
        <div className="mx-auto container px-4 flex items-end h-full py-7">
          <h1 className="text-4xl uppercase font-medium text-white">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="py-20 px-4 mx-auto container">
        <div>
          <p className="text-center text-[#999] text-sm">
            We’d Love to Hear From You
          </p>
          <h2 className="uppercase font-semibold text-[#363636] text-4xl relative text-center pb-6 mb-6">
            LET'S GET IN TOUCH!
            <span className="absolute bottom-2 h-[1px] w-16 left-1/2 -translate-x-1/2 bg-red-600"></span>
            <span className="absolute bottom-0 h-[1px] w-28 left-1/2 -translate-x-1/2 bg-red-600"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="bg-[#f6f6f6] hover:bg-red-600 py-7 px-3 group">
            <MdLocationOn
              size={30}
              className="text-red-600 mx-auto group-hover:text-white"
            />
            <h2 className="font-semibold text-lg uppercase text-center my-2 group-hover:text-white">
              Address
            </h2>
            <p className="text-sm text-[#999] text-center group-hover:text-white">
              3M Car Care Thane, Shop no. 2, Hill Chest, Manpada Chitalsar Naka,
              Manpada: 400 607
            </p>
          </div>
          <div className="bg-[#f6f6f6] hover:bg-red-600 py-7 px-3 group">
            <FaPhone
              size={25}
              className="text-red-600 mx-auto group-hover:text-white"
            />
            <h2 className="font-semibold text-lg uppercase text-center my-2 group-hover:text-white">
              Phone
            </h2>
            <a
              href="tel:+91 9987037747"
              className="text-sm block text-red-600 text-center group-hover:text-white"
            >
              +91 9987037747
            </a>
          </div>
          <div className="bg-[#f6f6f6] hover:bg-red-600 py-7 px-3 group">
            <GoMail
              size={25}
              className="text-red-600 mx-auto group-hover:text-white"
            />
            <h2 className="font-semibold text-lg uppercase text-center my-2 group-hover:text-white">
              Email
            </h2>
            <a
              href="mailto:sheshadri@contactxindia.com"
              className="text-sm block text-red-600 text-center group-hover:text-white"
            >
              sheshadri@contactxindia.com
            </a>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name*"
                  className="w-full bg-[#f6f6f6] p-3 text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Email*"
                  className="w-full bg-[#f6f6f6] p-3 text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  placeholder="Phone*"
                  className="w-full bg-[#f6f6f6] p-3 text-sm"
                />
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <textarea
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  rows={5}
                  placeholder="Message*"
                  className="w-full bg-[#f6f6f6] p-3 text-sm"
                />
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <button
                  className="bg-red-600 text-white p-3 w-full"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#f6f6f6] py-7 px-3">
            <h2 className="uppercase font-semibold relative pb-3 mb-6">
              Opening Hours
              <span className="absolute bottom-0 h-0.5 w-6 left-0 bg-red-600"></span>
            </h2>
            <div className="flex gap-2">
              <div>
                <p className="font-semibold text-sm mb-2">Sunday</p>
                <p className="font-semibold text-sm mb-2">Monday</p>
                <p className="font-semibold text-sm mb-2">Tuesday</p>
                <p className="font-semibold text-sm mb-2">Wednesday</p>
                <p className="font-semibold text-sm mb-2">Thursday</p>
                <p className="font-semibold text-sm mb-2">Friday</p>
                <p className="font-semibold text-sm">Saturday</p>
              </div>
              <div>
                <p className="text-sm text-red-600 mb-2">Closed</p>
                <p className="text-sm text-[#999] mb-2">9:00 AM to 9:00 PM</p>
                <p className="text-sm text-[#999] mb-2">9:00 AM to 9:00 PM</p>
                <p className="text-sm text-[#999] mb-2">9:00 AM to 9:00 PM</p>
                <p className="text-sm text-[#999] mb-2">9:00 AM to 9:00 PM</p>
                <p className="text-sm text-[#999] mb-2">9:00 AM to 9:00 PM</p>
                <p className="text-sm text-[#999]">9:00 AM to 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
