import React from "react";

const Hero = () => {
  return (
    <section className="bg-lady bg-cover bg-no-repeat py-[5.5rem]">
      <div>
        <div className="px-[6.5rem] sm:p-4 text-white">
          <p className="font-bold text-[3.5rem] sm:text-[3rem] sm:w-[100%] w-[40%]">Go wherever, whenever</p>
          <p className="py-6 text-[1.5rem] sm:text-[1.2rem] sm:w-[100%] w-[48%]">
            Bolt is the all-in-one mobility app. Get picked up by a top-rated
            driver in minutes and enjoy a comfortable ride to wherever you’re
            going; or skip the traffic entirely on one of our industry-leading
            scooters.
          </p>
          <button className="bg-[#32bb78] py-3 px-6 my-3 rounded-full">Get the app</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
