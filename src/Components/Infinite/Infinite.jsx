import React from "react";
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import s4 from '../../assets/s4.png';
import s5 from '../../assets/s5.png';
import s6 from '../../assets/s6.png';

export default function InfiniteScroll() {
  const logos = [
    { src: s1, alt: "Acme Corp" },
    { src: s2, alt: "Quantum" },
    { src: s3, alt: "Echo Valley" },
    { src: s4, alt: "Celestial" },
    { src: s5, alt: "Pulse" },
    { src: s6, alt: "Apex" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white py-[50px]  overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px] px-8"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}