"use client";
import Logo from "@/assets/icons/ecosystem.svg";
import React, { useState } from "react";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <section className="bg-black text-white text-center py-[48px]">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-[20px]">
          Everything you need
        </h1>
        {/* after md:w-[535px] wrapp it in div with flex and js to centyre it */}
        <div className="flex justify-center">
          <p className="text-xl md:text-2xl text-white/80 md:w-[535px] mb-16">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="md:px-[180px] lg:flex lg:px-0 lg:gap-2">
          {features.map(({ title, description }) => (
            <CardEffect key={title}>
              <div
                key={title}
                className="border border-white/20 mb-4 md:mb-0 px-10 py-10 rounded-[10px] bg-[#0D0D0D] flex-1"
              >
                <div className=" p-2   inline-flex  bg-white/90 text-black rounded-md mb-4">
                  <Logo className="w-9 h-9 px-2 py-2" />
                </div>

                <h1 className="text-lg font-semibold mb-2 ">{title}</h1>
                <p className="text-md md:w-80 text-center text-[#ffffff]/90 lg:w-auto">
                  {description}
                </p>
              </div>
            </CardEffect>
          ))}
        </div>{" "}
      </div>
    </section>
  );
};

const CardEffect = ({ children }: { children: React.ReactNode }) => {
  const [isHover, setIsHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMov = (e: React.MouseEvent) => {
    const position = e.currentTarget.getBoundingClientRect();
    console.log(position);
    setMousePosition({
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    });
  };

  return (
    <div
      className="relative overflow-hidden bg-[#000] flex-1 rounded-xl p-0 m-0 transition"
      onMouseMove={handleMouseMov}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        willChange: "transform",
      }}
    >
      {isHover && (
        <div
          className="absolute rounded-full"
          style={{
            width: "280px",
            height: "280px",
            background: "#5D2CAB",
            filter: "blur(100px)",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            transform: "translate(-0%, -0%)",
            zIndex: 10,
            willChange: "transform, top, left",
          }}
        />
      )}
      {children}
    </div>
  );
};
