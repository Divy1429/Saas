import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import star from "../../assets/star.png";
import helix from "../../assets/helix.png";

export default function SignUpCTA() {
  const [positions, setPositions] = useState({
    left: 0,
    right: 0,
  });

  // Calculate initial off-screen positions based on screen size
  const getInitialPositions = () => {
    if (typeof window !== 'undefined') {
      return {
        left: -600, // Start off-screen from the left
        right: -600, // Start off-screen from the right
      };
    }
    return {
      left: -600,
      right: -600,
    };
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 810) {
        // Screens 810px and below → fixed inward positions
        setPositions({
          left: -180,
          right: -121,
        });
      } else if (window.innerWidth <= 1200) {
        // Screens between 810px and 1200px → progressive movement
        const ratio = (window.innerWidth - 810) / (1200 - 810);
        setPositions({
          left: -180 + (180 * ratio),
          right: -121 + (121 * ratio),
        });
      } else {
        // Larger screens (1200px+) → normal positions
        setPositions({
          left: 0,
          right: 0,
        });
      }
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center bg-gradient-to-b from-white to-[#D2DCFF] ">
      <div className="max-w-[1200px] w-full h-full md:h-[472px] flex justify-center relative overflow-hidden py-[54px] md:py-0">
        
        {/* 🌟 Decorative Star Image - Left */}
        <motion.div
          className="absolute max-sm:hidden w-[260px] sm:w-[300px] md:w-[362px] h-auto pointer-events-none z-20"
          initial={{ left: getInitialPositions().left }}
          animate={{ left: positions.left }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{ top: "0px" }}
        >
          <img
            src={star}
            alt="star"
            className="w-full h-auto pointer-events-none relative"
            style={{ left: "-20px" }}
          />
        </motion.div>

        {/* 🧬 Decorative Helix Image - Right */}
        <motion.div
          className="absolute max-sm:hidden w-[260px] sm:w-[300px] md:w-[363px] h-auto pointer-events-none z-20"
          initial={{ right: getInitialPositions().right }}
          animate={{ right: positions.right }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{ top: "0px" }}
        >
          <img
            src={helix}
            alt="helix"
            className="w-full h-auto pointer-events-none relative"
            style={{ right: "-20px", top: "113px" }}
          />
        </motion.div>

        {/* ✨ Main Content */}
        <div className="md:mt-[132px] mt-0   max-w-[540px] flex flex-col items-center w-full text-center relative ">
          <h1 className="text-[34px] max-sm:max-w-[200px]  sm:text-[44px] md:text-[54px] leading-tight md:leading-[64px] font-['DM_Sans'] max-sm:font-semibold font-bold text-black mb-[24px] tracking-[-0.06em]">
            Sign up for free today
          </h1>

          <p className="text-[16px] sm:text-[16px] max-sm:max-w-[280px]  max-w-[447px] font-['Inter'] leading-[26px] sm:leading-[28px]  mb-[40px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-[17px]">
            <button className="bg-black text-white px-[20px] py-[12px] font-['Inter'] rounded-[10px] text-[16px] font-medium hover:bg-[#222] transition-colors duration-200">
              Get for free
            </button>

            <button className="flex items-center gap-[4px] text-black  font-['Inter'] py-[14px] text-[16px] font-medium hover:gap-[12px] transition-all duration-200">
              Learn more
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}