import React from "react";
import Image from "next/image";
import sideImage from "../../../public/Side Image.png";
import googleIcon from "../../../public/Icon-Google.png";

function page() {
  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row justify-start gap-20 items-center p-5 ">
      <div>
        <Image src={sideImage} alt="mobile image " className="w-[60vw] h-[40vh] md:w-[40vh] md:h-[80vh]"></Image>
      </div>
      <div className="flex flex-col  pr-16 gap-4">
        <h1 className="text-4xl font-medium">Create an account</h1>
        <h4>Enters your details below</h4>
        <input
          type="text"
          placeholder="Name"
          className="pb-2 text-[14px] text-slate-500 border-b-2 border-slate-600"
        />
        <input
          type="tel"
          placeholder="Email or hone Number"
          className="pb-2 text-[14px] text-slate-500 border-b-2 border-slate-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="pb-2 text-[14px] text-slate-500 border-b-2 border-slate-600"
        />
        <button className="py-2 px-5 text-white  rounded-md bg-[#DB4444]">
          Create Account
        </button>
        <button className="py-2 px-5 border-[1.2px] border-slate-700 rounded-md flex items-center justify-center gap-2 font-medium text-slate-800">
          <Image src={googleIcon} alt="google icon"></Image>
          Sign Up with Google
        </button>

        <p className="text-[16px] text-slate-600 text-center">Already have account ? <span className="font-medium text-slate-800 border-b-2 border-slate-700">Login</span></p>
      </div>
    </div>
  );
}

export default page;
