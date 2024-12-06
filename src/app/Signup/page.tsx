// import React from "react";
// import Image from "next/image";
// import sideImage from "../../../public/Side Image.png";
// import googleIcon from "../../../public/Icon-Google.png";

// function page() {
//   return (
//     <div className="w-screen min-h-screen flex flex-col md:flex-row justify-start gap-20 items-center p-5 ">
//       <div>
//         <Image src={sideImage} alt="mobile image " className="w-[90vh] h-[80vh] object-cover"></Image>
//       </div>
//       <div className="flex flex-col  pr-16 gap-4">
//         <h1 className="text-4xl font-medium">Create an account</h1>
//         <h4>Enters your details below</h4>
//         <input
//           type="text"
//           placeholder="Name"
//           className="pb-2 text-[14px] text-slate-500 border-b-2 border-slate-600"
//         />
//         <input
//           type="tel"
//           placeholder="Email or hone Number"
//           className="pb-2 text-[14px] text-slate-500 border-b-2 border-slate-600"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="pb-2 text-[14px] text-slate-500 border-b-2 border-slate-600"
//         />
//         <button className="py-2 px-5 text-white  rounded-md bg-[#DB4444]">
//           Create Account
//         </button>
//         <button className="py-2 px-5 border-[1.2px] border-slate-700 rounded-md flex items-center justify-center gap-2 font-medium text-slate-800">
//           <Image src={googleIcon} alt="google icon"></Image>
//           Sign Up with Google
//         </button>

//         <p className="text-[16px] text-slate-600 text-center">Already have account ? <span className="font-medium text-slate-800 border-b-2 border-slate-700">Login</span></p>
//       </div>
//     </div>
//   );
// }

// export default page;


import React from "react";
import Image from "next/image";
import sideImage from "../../../public/Side Image.png";
import googleIcon from "../../../public/Icon-Google.png";

function page() {
  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row justify-center gap-10 items-center p-5">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={sideImage}
          alt="mobile image"
          className="w-[90vw] md:w-[80vh] h-[80vh] object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 px-5 md:px-16">
        <h1 className="text-3xl md:text-4xl font-medium text-center md:text-left">
          Create an account
        </h1>
        <h4 className="text-center md:text-left">Enter your details below</h4>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Name"
          className="pb-2 text-sm text-slate-500 border-b-2 border-slate-600 focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Email or Phone Number"
          className="pb-2 text-sm text-slate-500 border-b-2 border-slate-600 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="pb-2 text-sm text-slate-500 border-b-2 border-slate-600 focus:outline-none"
        />

        {/* Buttons */}
        <button className="py-2 px-5 text-white rounded-md bg-[#DB4444] w-full md:w-auto">
          Create Account
        </button>
        <button className="py-2 px-5 border-[1.2px] border-slate-700 rounded-md flex items-center justify-center gap-2 font-medium text-slate-800 w-full md:w-auto">
          <Image src={googleIcon} alt="google icon" width={20} height={20} />
          Sign Up with Google
        </button>

        {/* Already Have Account */}
        <p className="text-sm text-slate-600 text-center">
          Already have an account?{" "}
          <span className="font-medium text-slate-800 border-b-2 border-slate-700 cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default page;

