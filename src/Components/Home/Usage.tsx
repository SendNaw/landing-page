import React from "react";
import './Home.css'
import { img, line_1 } from "../../Assets";
type Props = {};

const Usage = (props: Props) => {
  return (
    <div>
      <section className="frame bg-[#EFD3FE80]  h-[803px] max-md:h-[625px] relative z-40">
        <h2 className="text-wrapper text-[#110319] text-2xl lg:font-[700] font-[500] w-[80%] max-md:w-4/5 mx-auto max-md:text-left text-center pt-[52px]">
          How to Use SendNaw in 3 basic steps
        </h2>
        <img
          className="line h-[575px] object-cover w-[1px] absolute top-[140px] max-md:h-[150px] max-lg:h-[100px] max-md:top-[200px] max-lg:top-[250px] max-lg:rotate-90 max-md:left-[170px] max-lg:left-[200px] max-xl:left-[500px] left-[654px]"
          alt="Line"
          src={line_1}
        />
        <img
          className="line h-[575px] object-cover w-[1px] absolute top-[140px] max-md:h-[150px] max-lg:h-[100px] max-md:top-[370px] max-lg:top-[450px] max-lg:rotate-90 max-md:left-[170px] max-lg:left-[200px] max-xl:left-[500px] left-[654px]"
          alt="Line"
          src={line_1}
        />
        <h3 className="div text-[#000000} text-2xl max-md:text-lg font-[500] left-[317px] max-xl:left-[217px] max-lg:left-[140px] max-md:left-[90px] absolute top-[180px] max-xl:top-[168px] max-md:top-[160px]">
          Create an Account.
        </h3>
        <h3 className="absolute left-[317px] max-xl:left-[217px] max-lg:left-[140px] max-md:left-[90px] z-30 top-[350px] max-xl:top-[332px] max-md:top-[310px] text-[#000000} text-2xl max-md:text-lg font-[500] ">
          Fund your account.
        </h3>
        <h3 className=" left-[317px] max-xl:left-[217px] max-lg:left-[140px] max-md:left-[90px] z-30 absolute top-[530px] max-md:top-[480px] text-[#000000} text-2xl max-md:text-lg font-[500] ">
          Enjoy.
        </h3>
        <div className="group h-[683px] -right-8 max-md:-right-8 absolute z-50 md:z-0 top-[120px] max-md:top-[270px] w-[544px]">
          <div className="overlap-group h-[683px] relative ">
            <img
              className="vector-1 h-[614px] max-md:h-[490px] max-md:w-[400px] max-md:right-6 absolute max-md:top-[310px] top-[69px] right-0 w-[544px]"
              alt="Vector"
              src={img}
            />
          </div>
        </div>
        <p className="p w-[336px] max-md:w-[280px] top-[250px] max-xl:top-[223px] max-md:top-[210px] left-[317px] max-xl:left-[153px] max-lg:left-[60px] max-md:left-[30px]  text-base max-md:text-sm text-[#918398]">
          Create an account on your mobile app with sendnaw by entering your
          details
        </p>
        <p className="p text-[#918398] max-md:w-[280px] text-base max-md:text-sm left-[317px] max-xl:left-[153px] max-lg:left-[60px] max-md:left-[30px] top-[415px] max-xl:top-[397px] max-md:top-[360px] w-[336px]">
          Transfer money into your account from any bank account of your, or you
          can sync your bank account to sendnaw
        </p>
        <p className="p text-[#918398] max-md:w-[280px] text-base max-md:text-sm left-[317px] max-xl:left-[153px] max-lg:left-[60px] max-md:left-[30px]  top-[590px] max-md:top-[530px] w-[336px]">
          Manage your money in one place, enjoy seamless banking.
        </p>
        <div className="overlap-wrapper left-[223px] max-md:left-[30px] max-lg:left-[50px] max-xl:left-[140px] top-[174px] max-xl:top-[154px] max-md:top-[150px] ">
          <div className="overlap w-[62px] h-[62px]">
            <div className="ellipse top-[2px] bg-[#ad21fc] w-full max-md:w-[35px] max-lg:w-[45px] max-xl:w-[55px] h-[62px] max-md:h-[35px] max-lg:h-[45px] max-xl:h-[55px]" />
            <div className="text-wrapper-6 text-[#fefefe] text-[48px] max-xl:text-3xl max-md:text-2xl left-[17px] max-xl:left-[18px] max-lg:left-[14px] max-md:left-[11px] max-md:top-[6px] max-lg:top-[8px] max-xl:top-3 top-1">
              1
            </div>
          </div>
        </div>
        <div className="div-wrapper left-[223px] max-md:left-[30px] max-lg:left-[50px] max-xl:left-[140px] h-[65px] top-[340px] max-xl:top-[320px] max-md:top-[300px]">
          <div className="overlap-2 w-[62px] h-[65px]">
            <div className="ellipse-2 w-full top-[7px] bg-[#ad21fc] max-md:w-[35px] max-lg:w-[45px] max-xl:w-[55px] h-[62px] max-md:h-[35px] max-lg:h-[45px] max-xl:h-[55px]" />
            <div className="text-wrapper-8 text-[#fefefe] text-[48px] max-xl:text-3xl max-md:text-2xl left-[17px] max-xl:left-[20px] max-lg:left-[14px] max-md:left-[11px] max-md:top-[12px] max-lg:top-[14px] max-xl:top-4 top-3">
              2
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper left-[223px] max-md:left-[30px] max-lg:left-[50px] max-xl:left-[140px] top-[510px] max-xl:top-[520px] max-md:top-[470px]">
          <div className="overlap w-[62px] h-[62px]">
            <div className="ellipse w-full bg-[#ad21fc] max-md:w-[35px] max-lg:w-[45px] max-xl:w-[55px] h-[62px] max-md:h-[35px] max-lg:h-[45px] max-xl:h-[55px] left-0 absolute top-2" />
            <div className="text-wrapper-7 text-[#fefefe] text-[48px] max-xl:text-3xl max-md:text-2xl left-[17px] max-xl:left-[20px] max-lg:left-[14px] max-md:left-[11px] max-md:top-[12px] max-lg:top-[14px] max-xl:top-5 top-3">
              3
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Usage;
