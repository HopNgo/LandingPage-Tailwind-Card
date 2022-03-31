import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
import { useSpring, animated } from "react-spring";
const Content = () => {
  const customer = useSpring({ customers: 10240, from: { customers: 0 } });
  const card = useSpring({ cards: 12040, from: { cards: 0 } });
  return (
    <section className="md:flex md:justify-evenly md:items-center">
      <div className="ml-[70px] mr-[54px] px-[45px] py-[70px] font-bold bg-gradient-to-b from-white/40 shadow-md rounded-[24px] to-purple-700">
        <div className="">
          <div className="flex items-center justify-start gap-12">
            <div>
              <FaUser size={"24px"} />
            </div>
            <div>
              <div className="text-24">
                <animated.div>
                  {customer.customers.to((val) => Math.floor(val))}
                </animated.div>
              </div>
              <p className="text-[12px]">Customers</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-12 mt-4">
            <div>
              <BsFillCreditCardFill size={"24px"} />
            </div>
            <div>
              <div className="text-24">
                <animated.div>
                  {card.cards.to((val) => Math.floor(val))}
                </animated.div>
              </div>
              <p className="text-[13px] font-semibold">Cards Issued</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[13px] flex flex-col ml-[70px] mr-[40px] gap-[30px] mt-[90px] md:mt-0 md:gap-16 md:text-16">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p> Card reports sent to your phone every weeks </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>No external fees </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
