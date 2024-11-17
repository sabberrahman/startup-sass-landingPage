"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";
const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[66px]">
      <div className="container">
        <h1 className="text-[#7A7A7A] text-xl text-center mb-9 md:text-2xl lg:text-3xl">
          Trusted by the world’s most innovative teams
        </h1>

        <div
           className="overflow-hidden mt-9 relative  before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5   after:right-0 after:top-0 before:left-0  before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]  after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] before:z-10"
        >
          {/* use flex-none to use tranlate elemt to the fullest */}
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 pr-16 flex-none"
            transition={{
              duration: 5,
              repeat:Infinity,
              ease: "linear",
            
            }}
          >
            {/* double the images to make th einfinity effect  */}
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                key={alt}
                alt={alt}
                className="flex h-8 flex-none w-auto"
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                key={alt}
                alt={alt}
                className=" h-8 flex-none w-auto"
              />
            ))}
          
          </motion.div>
        </div>
      </div>
    </div>
  );
};
