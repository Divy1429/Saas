import React from "react";
import { motion } from "framer-motion";
import cylinderImg from "../../assets/cylinder.png";
import flowerImg from "../../assets/flower.png";
import halftour from "../../assets/halftour.png";

export default function HeroSection() {
  return (
    <div className="h-full w-full" >
    <div className="w-full flex h-full max-sm:pb-[85px] pb-0   justify-center  bg-gradient-to-bl from-[#EAEEFE] via-[#EAEEFE] to-[#183EC2]  relative ">
      {/* Hero Container - This is your 1200px × 710px reference */}
      <div className="relative overflow-visible max-w-[1200px] w-full max-sm:h-full h-[710px] max-sm:max-h-fit  ">
        
        {/* Left Content */}
        <div className="space-y-7 max-sm:space-y-6 max-w-[511px] max-sm:pl-[19.5px] pl-[43px] pt-[105px] max-sm:pb-[85px] pb-[156px] z-10">
          {/* Badge */}
          <div className="inline-flex rounded-[10px] items-center">
            <span className="bg-transparent backdrop-blur-sm px-[13px] py-[1px] rounded-full text-[13px] leading-[31px] font-medium font-['Inter'] border-[1px] border-[#2222221A]">
              Version 2.0 is here
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[90px] max-sm:text-[54px] max-sm:leading-[60px] max-sm:tracking-[-0.025em] tracking-[-0.065em] max-w-fit w-full font-['DM_Sans']
          leading-[90px] font-bold ">
            Pathway to productivity
          </h1>

          {/* Description */}
          <p className="text-[22px] font-['Inter'] max-w-[490px] w-full text-[#010D3E] leading-[31px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your
            successes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-black text-base text-white px-[15px] py-[10px] font-['Inter'] rounded-[10px] font-medium hover:bg-gray-800 transition-colors shadow-lg">
              Get for free
            </button>
            <button className="text-gray-900 text-[16px] font-['Inter'] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all group">
              Learn more
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
  className="absolute max-sm:hidden left-[445px] top-[9px] w-[216px] h-[197px] z-30"
  style={{
    backgroundImage: `url(${cylinderImg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop"
  }}
></motion.div>

        

       <motion.div
  className="absolute  max-sm:relative max-sm:pb-[85px]  max-sm:w-[388px] max-sm:h-[388px] max-sm:pt-[85px] max-sm:left-0 max-sm:top-[0px]  left-[530px] top-[20px] w-[648px] h-[648px] z-20"
  style={{
    backgroundImage: `url(${flowerImg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    scaleX: -1, // flips horizontally (equivalent to matrix(-1, 0, 0, 1, 0, 0))
  }}
  animate={{
    rotate: [0, 360]
  }}
  transition={{
    duration: 20,
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop"
  }}
></motion.div>

<motion.div
  className="absolute left-[980.69px] top-[550.63px] w-[231px] h-[231px] z-40"
  style={{
    backgroundImage: `url(${halftour})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transformOrigin: "center",
  }}
  animate={{
    rotate: [30, 40, 30]
  }}
  transition={{
    duration: 8,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop"
  }}
></motion.div>



      </div>
      
    </div>
    </div>
  );
}