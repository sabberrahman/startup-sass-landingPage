import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <section className="text-center py-20 bg-[linear-gradient(to_bottom,#000,#5D2CA8)] bg-black text-white">
      <div className="container">
        
        <div>
        <h1 className="text-3xl mb-5 lg:text-5xl">Intuitive interface</h1>
        <div className="flex justify-center">
        <p className="text-lg text-white/80 md:w-[535px] lg:text-xl lg:w-[580px]">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
        </div>
        
        </div>

   <div className="flex justify-center">
   <Image src={appScreen} alt="bigggoofyImage" width={500} height={400} className="mt-5 md:w-[736px] md:h-[437px] md:mt-[60px] lg:w-[1072px] lg:h-[678px]"/>

   </div>
     
      </div>
    </section>
  );
};
