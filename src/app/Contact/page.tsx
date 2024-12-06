import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

function Page() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-start px-6 md:px-28 gap-7 py-10">
      <h1 className="text-lg md:text-xl text-black">
        <span className="text-lg md:text-xl text-slate-700">Home /</span> Contact
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Card */}
        <div className="p-4 md:p-6 bg-white flex flex-col gap-5 shadow-md shadow-slate-500 rounded-md md:w-1/2">
          <div>
            <div className="flex gap-3 items-center">
              <FiPhone className="text-white text-3xl md:text-4xl bg-[#db4444] rounded-full text-center p-2" />
              <h2 className="text-lg md:text-xl text-black font-medium">Call to us</h2>
            </div>
            <p className="text-slate-800 text-sm md:text-[15px]">
              We are available 24/7, 7 days a week
            </p>
            <p className="text-slate-800 text-sm md:text-[15px]">Phone: +8801611112222</p>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <MdOutlineMailOutline className="text-white text-3xl md:text-4xl bg-[#db4444] rounded-full text-center p-2" />
              <h2 className="text-lg md:text-xl text-black font-medium">Write to us</h2>
            </div>
            <p className="text-slate-800 text-sm md:text-[15px]">
              Fill out our form and we will contact you within 24 hours
            </p>
            <p className="text-slate-800 text-sm md:text-[15px]">
              Email: customer@exclusive.com
            </p>
            <p className="text-slate-800 text-sm md:text-[15px]">
              Email: support@exclusive.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-4 md:p-6 bg-white shadow-md shadow-slate-500 rounded-md md:w-1/2">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-1/3 py-2 px-3 bg-[#F5F5F5] rounded-sm text-slate-700"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-full md:w-1/3 py-2 px-3 bg-[#F5F5F5] rounded-sm text-slate-700"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full md:w-1/3 py-2 px-3 bg-[#F5F5F5] rounded-sm text-slate-700"
            />
          </div>
          <div className="mt-4">
            <textarea
              name="message"
              id="message"
              rows={8}
              placeholder="Your Message"
              className="bg-[#F5F5F5] w-full p-4 rounded-sm text-slate-700"
            ></textarea>
          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-[#DB4444] text-white font-normal rounded-md text-center py-2 px-6">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
