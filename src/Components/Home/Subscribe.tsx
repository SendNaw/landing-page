import React, { useState, useEffect, useRef, forwardRef } from "react";
import useWaitlist from "./UserWaitlist";
import "./Home.css";
import { party_hat_1, party_hat_2 } from "../../Assets";

type Props = {};
// fowardRef allows components to forward a reference to their children
const Subscribe = forwardRef<HTMLInputElement | null>((props: Props, ref) => {
  const { post } = useWaitlist();
  const [email, setEmail] = useState("");
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      post(email);
      setEmail("");
      setIsSuccessVisible(true);
    } catch (error) {}
  };

  const closeSuccessMessage = () => {
    setIsSuccessVisible(false);
  };
  useEffect(() => {
    if (isSuccessVisible) {
      const timer = setTimeout(() => {
        closeSuccessMessage();
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSuccessVisible]);

  return (
    <div className="frame -mt-20 z-30 w-full h-[408px] waitlist max-md:h-[337px] bg-[#ad21fc]">
      <div className="overlap h-[358px] mx-auto relative top-[27px] w-3/4 max-lg:w-4/5 max-md:w-[85%]">
        <h2 className="text-wrapper absolute top-[50px] md:-top-2 text-center w-full text-2xl max-md:text-lg font-[500] max-lg:text-xl text-[#fefefe] md:mt-24">
          Join Waitlist to get daily Updates and Tips
        </h2>
        <div className="overlap-group h-[358px] w-full max-md:mt-10">
          <img
            className="image-removebg rotate-[25deg] h-[100px] w-[100px] max-md:h-[60px] max-md:w-[60px] object-cover relative max-md:top-20 top-16 -left-20 max-md:left-0 max-lg:-left-8 max-xl:-left-16"
            alt="Image removebg"
            src={party_hat_1}
          />
          <img
            className="img h-[100px] rotate-[20deg] w-[100px] max-md:h-[60px] max-md:w-[60px] object-cover absolute -right-20 max-md:right-0 max-lg:-right-8 max-xl:-right-16 max-md:top-[200px] top-[257px]"
            alt="Image removebg"
            src={party_hat_2}
          />
          <form
            onSubmit={handleSubmit}
            id="subscribe"
            className="subscribe rounded bg-[#fefefe] shadow-md shadow-[#00000010] mx-auto items-center px-[2px] flex max-md:mt-16 mt-20 w-[95%] max-md:h-[64px] h-[80px]"
          >
            <input
              type="email"
              name="subscribe"
              placeholder="Type your email here"
              className="h-full max-md:text-sm md:text-base text-center text-[#ad21fc] cursor-pointer font-[500] outline-none max-lg:w-2/3 w-4/5 max-xl:w-3/4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="inputId"
              ref={ref} 
            />
            <button className="max-lg:w-1/3 max-xl:w-1/4 w-1/5 bg-[#ad21fc] rounded shadow-md shadow-[#00000030] h-[95%] font-[500] text-[#fefefe] text-xl max-md:px-2 max-lg:text-lg max-md:text-base">
              Join the waitlist
            </button>
          </form>
          {isSuccessVisible && (
            <div className="absolute top-0 inset-0 flex items-center justify-center z-50">
              <div className="bg-white absolute top-3 right-0 rounded-lg shadow-lg p-2 w-64">
                <p className="text-green-500 text-sm font-semibold mb-2">
                  SUBSCRIPTION SUCCESSFUL!
                </p>
                <p className="text-gray-700 text-xs mb-4">
                  Check your spam folder in case you don't see our emails.
                </p>
                <button
                  onClick={closeSuccessMessage}
                  className="bg-blue-500 text-white text-center flex items-center justify-center hover:bg-blue-600 absolute top-2 right-3 text-2xl h-[25px] w-[25px] rounded-full"
                >
                 <span> &times;</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Subscribe;
