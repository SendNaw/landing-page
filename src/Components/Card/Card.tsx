import React from "react";
import vector2 from "../../Assets/Sketch-annotation-element-stroke-line-arrow-spiral-down-5.png";
import { vector, a1, a2 } from "../../Assets";

type Props = {};

const Card = (props: Props) => {
  return (
    <div>
      <section className='bg-textPurple relative bg-opacity-10 h-96'>
        <div className='flex items-center md:w-[95%] mx-auto h-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 w-[95%] lg:w-[98%] mx-auto '> 
            <div className='relative xl:left-[15%] px-5'>
            <span className='text-dark font-bold text-xl md:font-medium'>Hello Kalidor,</span> 
              <p className='text-textPurple  py-5 max-xl:text-base text-lg font-medium lg:leading-10 pr-5 text-start'>
                Click any Card to redirect you to your available balance
              </p>
            </div>

            <div className="mt-5 lg:mt-0">
              <div className="flex">
                <div className="mx-3">
                  <img src={a2} alt="Naira-card" />
                </div>
                <div className="mx-3">
                  <img src={a1} alt="Dollar-card" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute hidden lg:block top-0 lg:left-1/3 right-5">
            <img src={vector} alt="vector" className="" />
          </div>
          <div className="absolute block lg:hidden top-0  right-5">
            <img src={vector2} alt="vector" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
