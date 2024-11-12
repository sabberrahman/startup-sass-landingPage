"use client";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";
import { useState } from "react";
import clsx from "clsx";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

const AccordiantItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    // use mx-auto when playg with w-[675px] or max-width to center it
    <div className="py-8 border-b border-white/30 transition duration-300  md:w-[675px] mx-auto xl:w-[760px] cursor-pointer" key={question}
    onClick={()=>setIsOpen(!isOpen)}
    >
      <div className="flex md:font-semibold">
        {" "}
        <span className="flex-1 text-start text-xl">{question}</span>
        {isOpen?<Minus className="w-6 h-6"/>:<Plus className="w-6 h-6"/>}
       
      </div>
      <div className={clsx({"hidden":!isOpen},"mt-4 md:w-[500px] text-start text-white/80 text-lg")}>{answer}</div>
    </div>
  );
};

export const FAQs = () => {
  return (
    <section className="py-24 text-center bg-[linear-gradient(to_bottom,#5D2CA8,#000)] text-white">
      <div className="container">
        <h1 className="text-[32px] font-semibold md:text-5xl mb-4 md:mb-12 xl:mb-12 xl:text-[50px] ">Frequently asked questions</h1>

        <div>
          {items.map(({ question, answer }) => (
            <AccordiantItem question={question} answer={answer} key={question}/>
          ))}
        </div>
      </div>
    </section>
  );
};
