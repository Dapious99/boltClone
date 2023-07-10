import React from "react";
import city from "../../assets/desktop.png";
import Button from "../button/Button";

const Cities = () => {
  return (
    <section className='lg:px-[6.5rem] px-3 py-8 lg:py-[4rem]'>
      <div className="lg:flex lg:flex-row flex flex-col gap-[4rem]">
          <div className="flex flex-col justify-center lg:w-[50%] w-full">
            <p className="font-semibold text-[3.5rem] w-[27rem] pb-7 leading-[3rem]">Making cities for people, not cars</p>
            <p className="font-normal text-[1.5rem] w-[34rem] pb-7 leading-normal">By sharing our knowledge of the industry and real-time data we’re helping to improve our cities.</p>
            <div className="flex flex-col gap-7">
              <div className="flex gap-4 py">
                <span className="bg-[#32bb78] mt-4 items-center justify-center p-3 flex w-6 h-6 text-white rounded-[50%]">
                  <p className="text-[0.8rem]">1</p>
                </span>
                <span>
                  <p className="font-bold py-2 text-[1.5rem]">
                    Sharing best practices
                  </p>
                  <p className="font-normal w-[30rem] text-[#717780] text-[1.1rem] leading-tight">
                    We’re able to provide insights that help local authorities make their cities more connected and liveable.
                  </p>
                </span>
              </div>
              <div className="flex gap-4 py">
                <span className="bg-[#32bb78] mt-4 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                  <p className="text-[0.8rem]">2</p>
                </span>
                <span>
                  <p className="font-bold py-2 text-[1.5rem]">One app, many ways to move</p>
                  <p className="font-normal w-[30rem] text-[#717780] text-[1.1rem] leading-tight">
                  With multiple transport services inside a single app, getting around safely, in a more sustainable way, has never been easier.
                  </p>
                </span>
              </div>
              <div className="flex gap-4 py">
                <span className="bg-[#32bb78] mt-4 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                  <p className="text-[0.8rem]">3</p>
                </span>
                <span>
                  <p className="font-bold py-2 text-[1.5rem]">Sustainability as a priority</p>
                  <p className="font-normal w-[31rem] text-[#717780] text-[1.1rem] leading-tight">
                    We’re compensating for the CO2 emissions our transport and delivery solutions create, minimising our impact on the local environment.
                  </p>
                </span>
              </div>
              <div className="pt-3">
                <Button
                  backgroundcolor="bg-gray-100"
                  textcolor="text-black"
                  text={"Learn more"}
                  hovcol="bg-gray-200"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full">
            <img src={city} alt=""/>
          </div>
      </div>
    </section>
  );
};

export default Cities;
