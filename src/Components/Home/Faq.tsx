import React, { useState } from "react";
import "./Home.css";
import { down_arrow, up_arrow } from "../../Assets";

interface FaqDataType {
  question: string;
  ans: string;
}

const faqData: FaqDataType[] = [
  {
    question: "What is SendNaw?",
    ans: "SendNaw is a Fintech that helps its users withdraw and make payments. SendNaw also gives you financial loans, for your business and personal needs. With SendNaw, you can create a savings account that would help you meet your targeted needs.",
  },
  {
    question: "What makes SendNaw Unique?",
    ans: "SendNaw is unique because, our users are able to have both Naira and Dollar cards and can easily convert from Naira to Dollar and vice versa. We also offer business, gadget and personal loans to SendNaw Users, SME’S , NYSC members, Young graduates, and most importantly we foster effective communication between our  users and customer care attendants.",
  },
  {
    question: "Does SendNaw require any charges?",
    ans: "SendNaw allows to send money to other SendNaw accounts and bank accounts, without any transaction charge.",
  },

  {
    question: "What makes me eligible for SendNaw Loans?",
    ans: "You are eligible for SendNaw Loans, as long you are a SendNaw User, an eligible Nigerian that has any Valid means of Identification, a BVN, 18 years of age and above, an active bank account, does not have pending loans, and must have a good transaction score.",
  },
  {
    question: "Can my company use SendNaw to pay staff salary?",
    ans: "Yes, your company can use SendNaw to pay salaries, as we allow bulk transactions. All you have to do is input all staff account no and hit the “One time Send” button.",
  },
  {
    question: "Would SendNaw have both naira and dollar debit cards?",
    ans: "Yes, SendNaw has both Naira and Dollar debit cards, you can also convert your Naira to Dollar and vice versa.",
  },
  {
    question: "How safe is SendNaw?",
    ans: "SendNaw is committed to assuring that your money is safe. We make use of World class Cyber Security encryptions, also we are a fully registered fintech company and we operate under the CBN regulatory.",
  },
  {
    question: "When Would SendNaw be launched?",
    ans: "While, we are looking forward to launching in December, 2023, we also ask that you join the waitlist so you can be the first to get juicy hot details of what we’re working on.",
  },
];

export const FAQ = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (i: number) => {
    if (openIndex === i) setOpenIndex(null);
    else setOpenIndex(i);
    setDropDown((prev) => !prev);
  };
  return (
    <div
      id="faq"
      className="FAQ-s relative shadow-[0px_4px_4px_#00000030] mt-14 z-40 w-[90%] mx-auto border-[#ad21fc80] border-solid border-4 rounded max-md:mt-[520px]"
    >
      <h2 className="got-questions-get max-lg:text-2xl text-3xl font-[600] lg:font-[700] flex max-md:flex-col gap-4 max-md:gap-2 relative w-auto top-[74px] max-md:top-[30px] left-[5%]">
        <span className="text-[#110319]">Got Questions? </span>
        <span className="text-[#ad21fc]">Get Answers!</span>
      </h2>
      <div className="flex flex-col gap-10 my-40 max-md:my-20">
        {faqData.map((data, i) => (
          <div key={i} className="frame flex flex-col w-[90%] mx-auto">
            <div
              onClick={() => handleDropDown(i)}
              className={[
                "cursor-pointer text-[#ad21fc] transition-all shadow-[2px_2px_2px_#0000001a] p-4 flex items-center justify-between w-full text-xl border-[1px] border-solid border-[#918398] rounded-xl ",
                [openIndex === i ? "bg-[#ad21fc30]" : "bg-[#fefefe]"],
              ].join(" ")}
            >
              <h4 className="text-lg font-[700] max-lg:font-[600] max-md:text-base">
                {data.question}
              </h4>
              <img
                className={`${up_arrow}`}
                alt="arrow"
                src={openIndex === i ? `${down_arrow}` : `${up_arrow}`}
              />
            </div>
            <div
              className={[
                "w-full shadow-[inset_2px_2px_4px_1px_#ad21fc33] border-[1px] border-solid border-[#918398] bg-[#fefefe] rounded-xl max-md:py-12 ",
                [
                  openIndex === i
                    ? " md:h-[200px] transition-all flex items-center justify-center"
                    : "hidden h-0",
                ],
              ].join(" ")}
            >
              <p className="text-[#918298] w-[90%] text-base lg:text-lg max-md:text-sm font-[600]">
                {data.ans}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
