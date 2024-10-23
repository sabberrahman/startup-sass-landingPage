import ArrowIcon from "@/assets/icons/arrow-w.svg";
import Image from "next/image";
import cursorImage from "@/assets/images/cursor.png";
import msgImage from "@/assets/images/message.png";
export const Hero = () => {
  return (
    <div className="text-center bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42,#4F21A1,#A46EDB)] py-[76px] md:py-[92px] relative overflow-clip">
      <div className="container relative z-10">
        <div className="">
          <a
            href="#"
            className=" inline-flex gap-3 px-3 py-1 rounded-[10px] border border-white/30"
          >
            <span className=" bg-[linear-gradient(to_right,#FEECFF,#FECAFF,#FEB5FF,#FFDBE7,#FFF4D6,#F3FCD7,#D2F5EE,#C3EFFF,#FBEFFF)] text-transparent bg-clip-text font-medium">
              Version 2.0 is here{" "}
            </span>
            <div className="flex justify-center items-center gap-1">
              <span>Read more </span>
              <ArrowIcon />
            </div>
          </a>
        </div>
        <div className="relative inline-flex mt-8">
          <h1 className="tracking-tighter text-white font-bold text-7xl items-center inline-flex md:text-9xl z-10 md:z-0">
            One task <br /> a time
          </h1>
          <Image
            src={cursorImage}
            alt="cursor image"
            className="absolute top-[120px] -left-40 hidden sm:inline-flex"
          />
          <Image src={msgImage} alt="cursor image" className="absolute -right-[180px] bottom-0  " />
        </div>
        <p className="mt-8 text-xl  text-white/60 text-center w-80 md:w-[456px] mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <button className="bg-white px-[15px] py-[10px] rounded-[10px] text-black mt-8">
          Get for free
        </button>{" "}
      </div>
      <div className="absolute w-[909px] h-[359px] md:w-[1536px] md:h-[756px] lg:w-[2344px] lg:h-[1012px]  bg-[radial-gradient(closest-side,#000_85%,#9C67F4)]  rounded-[100%] left-1/2 -translate-x-1/2 border border-[#BE9AE7] -mt-4 "></div>
    </div>
  );
};
