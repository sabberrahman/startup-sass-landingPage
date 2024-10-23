"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

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
        <h1 className="text-[#7A7A7A] text-xl text-center mb-9">
          Trusted by the world’s most innovative teams
        </h1>

        <div className="flex overflow-hidden gap-8 justify-center items-center
        before:contents[''] after:contents[''] before:absolute after:absolute before:h-full after:h-full before:w-20 after:w-20 relative before:bg-[linear-gradient(to_right,#000,rgb(0,0,0))] before:left-0 after:bg-green-200 after:right-0
        ">
          {images.map(({ src, alt }) => (
            <Image
              src={src}
              key={alt}
              alt={alt}
              className="flex-none h-8 w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
