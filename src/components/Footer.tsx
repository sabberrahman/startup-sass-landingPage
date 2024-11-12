
import X from "@/assets/icons/x-social.svg"
import Insta from "@/assets/icons/insta.svg"
import Linkedin from "@/assets/icons/linkedin.svg"
import Youtube from "@/assets/icons/youtube.svg"

export const Footer = () => {
  return (
    <section className="bg-black text-white py-8">
      <div className="container">

        <div className="md:flex md:justify-between">
        <h1 className="text-md text-center tracking-tighter text-white/70 xl:text-xl">@ 2024 Sabber tried coding . All rights Reserved</h1>
        <div className="flex justify-center gap-2 opacity-70 mt-2 md:mt-0 md:mr-2 ">
           <X className="w-8 h-6 l"/>
           <Insta className="w-8 h-6 "/>
           <Linkedin className="w-8 h-6 "/>
           <Youtube className="w-8 h-6 "/>
        </div>
        </div>
      </div>
    </section>
  );
};
