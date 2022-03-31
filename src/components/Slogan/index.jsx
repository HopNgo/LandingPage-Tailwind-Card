import React from "react";
import Cards from "../../assets/desktop/isocard.svg";
const Slogan = () => {
  return (
    <section className="text-36 my-14 font-extrabold md:grid md:mt-20 md:items-center md:grid-cols-3 ">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p>
          Earn <span className="text-purple-500">More</span>
        </p>
        <p>Pay Less</p>
        <button className="text-white text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-600  rounded-[14px] hover:bg-pink-500 transition-all duration-300">
          Start
        </button>
      </div>
      <div className="mt-[60px]">
        <img src={Cards} alt="" />
      </div>
    </section>
  );
};

export default Slogan;
