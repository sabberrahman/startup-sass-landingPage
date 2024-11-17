"use client";
import Image from "next/image";
import stats from "@/assets/images/emojistar.png";
import nuts from "@/assets/images/helix2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const refImg = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refImg,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [60, -80]);
  return (
    //overflow-hiidden main parent div te
    <section
      className="bg-black text-white py-[72px] text-center overflow-hidden"
      ref={refImg}
    >
      <div className="container">
        <div className="mb-10">
          <div className="relative z-10">
            <h1 className="text-4xl font-semibold mb-5 md:text-5xl xl:text-6xl">
              Get instant access
            </h1>
            <motion.div style={{ translateY }}>
              <Image
                src={stats}
                alt="bigGoofyaimge"
                width={200}
                height={200}
                className="absolute -top-16 -left-24 hidden md:inline-flex xl:w-[263px] xl:h-[263px]"
              />
            </motion.div>
          
          <motion.div style={{translateY}}>
  <Image
              src={stats}
              alt="bigGoofyaimge"
              width={120}
              height={120}
              className="absolute -top-16 -z-10 -left-20 sm:hidden md:hidden  xl:w-[263px] xl:h-[263px]"
            />

            <Image
              src={nuts}
              alt="bigGoofyaimge"
              width={200}
              height={200}
              className="absolute hidden md:inline-flex top-0 -right-16 xl:w-[263px] xl:h-[263px]"
            />
          </motion.div>
          
          </div>

          <p className="text-lg md:w-[447px] xl:w-[520px] xl:text-xl mx-auto text-white/90 tracking-tighter ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>

        <div className="flex gap-3 flex-col w-[300px] mx-auto md:flex-row md:w-[409px] xl:w-[520px]">
          <input
            placeholder="name@gmail.com"
            type="text"
            className="rounded-[10px] px-4 py-2 xl:text-lg bg-white/20 text-white/50 text-center flex-1"
          />
          <button className=" rounded-[10px] px-4 py-2 bg-white text-black xl:text-lg">
            Get access
          </button>
        </div>
      </div>
    </section>
  );
};
