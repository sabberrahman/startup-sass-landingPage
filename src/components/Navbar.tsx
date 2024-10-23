import Image from "next/image";
import logo from "@/assets/images/logosaas.png";
import Menu from "@/assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <nav className=" bg-black">
      <div className="container">
        <div className="flex justify-between items-center py-5 ">
          <div className="relative">
            <div className="absolute top-2 bottom-0 w-full blur-md bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] "></div>
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={41}
              className="relative"
            />
          </div>

          <div className="border border-white/30 p-1.5 rounded-lg md:hidden">
            {" "}
            <Menu className="text-white" />
          </div>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="hover:text-opacity-100 text-white text-opacity-60 transition">About</a>
          <a href="#" className="hover:text-opacity-100 text-white text-opacity-60 transition">Features</a>
          <a href="#" className="hover:text-opacity-100 text-white text-opacity-60 transition">Updates</a>
          <a href="#" className="hover:text-opacity-100 text-white text-opacity-60 transition">Careers</a>
          <a href="#" className="hover:text-opacity-100 text-white text-opacity-60 transition">Blogs</a>
          <a href="#" className="hover:text-opacity-100 text-white text-opacity-60 transition">Cutomers</a>
          <button className='bg-white px-3 py-2.5 rounded-[10px] text-black'>Get for free</button>
        </nav>
        </div>

      </div>
    </nav>
  );
};
