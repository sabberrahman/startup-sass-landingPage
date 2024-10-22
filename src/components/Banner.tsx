import ArrowIcon from "@/assets/icons/arrow-w.svg";
export const Banner = () => {
  return (
    <main className="py-4 text-center bg-[linear-gradient(to_right,#FEECFF,#FECAFF,#FEB5FF,#FFDBE7,#FFF4D6,#F3FCD7,#D2F5EE,#C3EFFF,#FBEFFF)]">
      <div className="container">
        <div className="flex justify-center items-center gap-x-2">
          <h1 className="font-medium hidden md:inline-flex">
            This page is included in a free SaaS Website Kit.
          </h1>
          <div className="flex gap-2 justify-center items-center">
            <a href="#" className="font-medium underline underline-offset-4">
              View the complete kit
            </a>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </main>
  );
};

// 🤷‍♂️ use less flex in your code
