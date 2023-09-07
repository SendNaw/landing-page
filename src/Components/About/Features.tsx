import React, { useEffect, useRef, useState } from "react";
import { icon1, icon2, icon3, icon4, icon6 } from "../../Assets";
import { Link } from "react-router-dom";
import "./Features.css";
import AOS from "aos";
import "aos/dist//aos.css";

const useIntersectionObserver = (elementRef: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);

  return isIntersecting;
};

type Props = {};

const About = (props: Props) => {
  const words = ["How", "We", "Serve", "You"];
  const [animatedWords, setAnimatedWords] = useState<string[]>([]);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const isHeaderVisible = useIntersectionObserver(headerRef);
  const [showExtraContent, setShowExtraContent] = useState(false);
  const gridItemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    AOS.init({ duration: 500 });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const determineGridCols = () => {
    return window.innerHeight < 300
      ? "grid-cols-1"
      : "md:grid-cols-2 lg:grid-cols-3";
  };
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const newScrollDirection = currentScrollY > 0 ? "up" : "down";

    if (newScrollDirection !== scrollDirection) {
      setScrollDirection(newScrollDirection);
      AOS.refresh();
    }
  };

  useEffect(() => {
    if (isHeaderVisible) {
      setAnimatedWords([]);
      const animationInterval = setInterval(() => {
        if (words.length > 0) {
          const nextWord = words[0];
          setAnimatedWords((prevWords) => [...prevWords, nextWord]);
          words.shift();
        }
      }, 200);

      return () => {
        clearInterval(animationInterval);
      };
    }
  }, [isHeaderVisible]);

  const gridItems = [
    {
      icon: icon2,
      id: "Add",
      title: "Add Cash",
      description: "Customers can top their dollars either by dollars or naira",
    },
    {
      icon: icon3,
      id: "Send",
      title: "Send Cash",
      description:
        "Allows you to make online deposits to other sendnaw accounts, bulk transfer, and other bank accounts",
    },
    {
      icon: icon1,
      id: "Withdraw",
      title: "Withdraw Cash",
      description:
        "This allows customers to take their money out of their account, typically done at an ATM or POS machine",
    },
    {
      icon: icon6,
      id: "Saving",
      title: "My Savings",
      description:
        "This feature gives you options to save towards a goal and earn interest as well",
    },
    {
      icon: icon4,
      id: "Swap",
      title: "Swap Card",
      description:
        "Be able to swap your card from dollar card to naira card, in order to support local or international payments",
    },
    {
      icon: icon6,
      id: "Pay",
      title: "Pay Bill",
      description:
        "An online collection platform that allows customers to pay bills and make payments for goods and services online, anytime.",
    },
  ];
  const gridItemsFlex = [
    {
      icon: icon1,
      id: "Loan",
      title: "Loan Me",
      description:
        "Active User of the SendNaw app can apply the LoanMe cash, LoanMe airtime, LoanMe data and the LoanMe gadget, which customers",
    },
    {
      icon: icon6,
      id: "Mobile",
      title: "Mobile Cheque",
      description:
        "It's incredibly easy for mobile deposits, allowing customers receive cash from a cheque using the mobile device",
    },
  ];

  return (
    <div>
      <section className="bg-white container mx-auto py-5" id="Features">
        <div className="m-auto container">
          <h2
            ref={headerRef}
            className={` font-[500] lg:font-[700] max-md:text-[28px] max-lg:text-3xl text-4xl pt-5 text-center about ${
              isHeaderVisible ? "visible" : ""
            }`}
            style={{
              whiteSpace: "pre",
            }}
          >
            {window.innerWidth <= 768 ? (
              <>
                <div className="word-animation text-center flex flex-row">
                  <span>{animatedWords[0]}</span>{" "}
                  <span>{animatedWords[1]}</span>{" "}
                  <span>{animatedWords[2]}</span>{" "}
                  <span>{animatedWords[3]}</span>
                </div>
              </>
            ) : (
              animatedWords.map((word, index) => (
                <span key={index} className="word-animation">
                  {word}{" "}
                </span>
              ))
            )}
          </h2>

          <div className="py-5 w-[97%] xl:w-full mx-auto">
            <div className="grid container my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto  ">
              {gridItems.map((item, index) => (
                <div
                  key={index}
                  id={item.id}
                  className={`py-6 md:py-10  m-5 w-[90&] xl:w-[85%] mx-5 flex shadow-lg hover:bg-lightpurple hover:transition-all cursor-pointer`}
                  data-aos="fade-up"
                >
                  <div className="m-4">
                    <div className="mx-2">
                      <img src={item.icon} alt="Add-icon" />
                    </div>
                    <h3 className="px-3 pt-3 text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="p-3">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 w-max-md justify-between mx-auto ${
                showExtraContent ? "" : "hidden"
              }`}
            >
              {gridItemsFlex.map((item, index) => (
                <div
                  key={index}
                  id={item.id}
                  data-aos="fade-up"
                  className="h-52 md:h-72 m-5 md:w-80  w-96 mx-5 flex hover:bg-lightpurple hover:transition-all cursor-pointer shadow-lg justify-self-center"
                >
                  <div className="m-4">
                    <div className="mx-2">
                      <img src={item.icon} alt="Add-icon" />
                    </div>
                    <h3 className="px-3 pt-3 text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="p-3 ">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container flex justify-end">
          <Link to="">
            <p
              className="font-medium text-xl text-customPurple px-5"
              onClick={() => setShowExtraContent(!showExtraContent)}
            >
              {showExtraContent ? "Show Less" : "Learn More"}
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
