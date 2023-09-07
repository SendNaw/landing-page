import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { heroimage, line, abstract, molecular } from "../../Assets";

import Footer from "../Footer";
import Nav from "../Nav/Nav";
import { NavLink } from "react-router-dom";
import About from "../About/Features";
import Card from "../Card/Card";
import { FAQ } from "./Faq";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Subscribe from "./Subscribe";
import Usage from "./Usage";

type Props = {};

const Home = (props: Props) => {
  const [isWaitlistVisible, setIsWaitlistVisible] = useState(false);
  const waitlistRef = useRef(null);
  const [hasNavigatedToWaitlist, setHasNavigatedToWaitlist] = useState(false);
  // inputRef for the subscribe input
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleJoinWaitlistClick = () => {
    setHasNavigatedToWaitlist(true);
    // checks if the inputRef == null, if true, it focues the input
    inputRef.current && inputRef.current.focus();
    scroll.scrollTo("subscribe", {
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      onSettled: () => {
        setIsWaitlistVisible(false);
      },
    });
  };

  const handleHideWaitlist = () => {
    localStorage.setItem("waitlistClosed", "true");
    setIsWaitlistVisible(false);
  };

  useEffect(() => {
    localStorage.removeItem("waitlistClosed");

    const handleScroll = () => {
      const nav = document.querySelector(".nav");
      if (nav) {
        const navBottom = nav.getBoundingClientRect().bottom;
        setIsWaitlistVisible(window.scrollY >= navBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="">
        <Nav />
      </section>
      <section className="bg-lightpurple mt-[70px] w-full About h-full filter bg-opacity-20">
        <div className="grid md:grid-cols-12 w-[87%] max-md:w-[95%] max-lg:w-[93%] max-xl:w-[90%] h-full py-4 md:pt-16 md:pb-32 lg:py-0 lg:h-screen mx-auto">
          <div className="md:col-span-7 flex justify-start items-center p-4 lg:p-0">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl leading-snug font-bold">
                Building the Biggest <br /> Financial Network via Web3
              </h1>
              <div className="mb-2">
                <img
                  src={line}
                  alt="border-image"
                  className="max-md:w-3/4 max-md:relative max-md:-left-2 w-4/6 mx-auto"
                />
              </div>
              <div className="my-5">
                <p className="text-textPurple hidden py-5 md:block text-base xl:text-lg lg:w-4/5 font-medium">
                  Make Payments easy and secure, giving users access to Gadgets,{" "}
                  and Financial loans. Swap cards, dollar and naira with{" "}
                  <Link to="/" className="text-customPurple cursor-pointer">
                    Sendnaw
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative grid m-auto justify-center content-center items-center">
            <div className="my-2 z-20">
              <img src={heroimage} alt="hero image" className="m-auto" />
            </div>
            <div className="absolute bottom-32">
              <img src={abstract} alt="abstract" className="w-16 h-16" />
            </div>
            <div className="absolute top-0 right-7">
              <img src={molecular} alt="molecular" className="w-16 h-16" />
            </div>
          </div>
          <div className="my-2">
            <p className="text-textPurple md:hidden px-7  text-base leading-8 font-medium">
              Make Payments easy and secure, giving users access to Gadgets, and
              Financial loans. Swap cards, dollar and naira with &nbsp;
              <NavLink to="" className="text-customPurple">
                Sendnaw
              </NavLink>
            </p>
          </div>
        </div>
      </section>
      <About />
      <Card />
      <div ref={waitlistRef}>
        {!localStorage.getItem("waitlistClosed") &&
          isWaitlistVisible &&
          !hasNavigatedToWaitlist && (
            <section
              className={`bg-white fixed top-0 left-0 right-0 flex justify-center items-center py-2 shadow-md ${
                isWaitlistVisible ? "fixed" : ""
              }`}
              style={{ zIndex: 999 }}
            >
              <div className="flex flex-col w-full max-w-lg mx-4 lg:max-w-xl ">
                <div className="flex justify-between">
                  <p className="font-medium tracking-wide text-gray-500 text-center ">
                    Be part of the movement! Join the waitlist
                  </p>
                  <button
                    onClick={handleHideWaitlist}
                    className="text-gray-500 "
                  >
                    <span className="text-2xl font-bold">&times;</span>
                  </button>
                </div>
                <Link
                  to="waitlist"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="bg-customPurple my-2 text-white font-medium text-center rounded p-2"
                >
                  <button onClick={handleJoinWaitlistClick}>
                    Join Waitlist
                  </button>
                </Link>
              </div>
            </section>
          )}
      </div>
      <Usage />
      <FAQ />
      {/* initially ref can not be passed on components, but this is accessible because of the forwardRef hook */}
      <Subscribe ref={inputRef} />
      <Footer />
    </div>
  );
};

export default Home;
