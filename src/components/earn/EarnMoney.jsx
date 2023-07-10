import { useState } from "react";
import driver from '../../assets/driver.webp'
import courier from '../../assets/courier.webp'
import restaurant from '../../assets/restaurant.webp'
import fleet from '../../assets/fleetOwner.webp'
import Button from "../button/Button";

const EarnMoney = () => {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonId) => {
      setActiveButton(buttonId);
    };
  return (
    <section>
      <div>
        <div className="py-[5rem]">
          <p className="text-center font-bold text-[3rem]">Earn money with Bolt</p>
          <div className="flex gap-4 sm:grid sm:grid-cols-2 justify-center pt-3 pb-10">
            <button className={activeButton === 1 ? 'bg-black text-white rounded-3xl px-4 py-1 border-2 border-black' : 'border-2 rounded-3xl hover:bg-gray-100 py-1 px-4'} onClick={() => handleButtonClick(1)}>Driver</button>
            <button className={activeButton === 2 ? 'bg-black text-white rounded-3xl px-4 py-1 border-2 border-black' : 'border-2 rounded-3xl hover:bg-gray-100 py-1 px-4'} onClick={() => handleButtonClick(2)}>Courier</button>
            <button className={activeButton === 3 ? 'bg-black text-white rounded-3xl px-4 py-1 border-2 border-black' : 'border-2 rounded-3xl hover:bg-gray-100 py-1 px-4'} onClick={() => handleButtonClick(3)}>Restaurant or store owner</button>
            <button className={activeButton === 4 ? 'bg-black text-white rounded-3xl px-4 py-1 border-2 border-black' : 'border-2 rounded-3xl hover:bg-gray-100 py-1 px-4'} onClick={() => handleButtonClick(4)}>Fleet owner</button>
          </div>
          <div className="flex justify-center">
            {/* Render div based on activeButton */}
            {activeButton === 1 && <div className="lg:flex lg:flex-row flex flex-col gap-[5rem] px-3 lg:px-[11rem]">
                <div className="lg:w-[53%] w-full"><img src={driver} className="rounded-2xl"/></div>
                <div className="flex flex-col justify-center lg:w-[47%] w-full">
                  <h2 className="font-semibold text-[3.2rem] pb-7 leading-[3rem]">Drive and earn extra money</h2>
                  <div className="flex flex-col gap-7">
                    <div className="flex gap-3 py">
                      <span className="bg-[#32bb78] mt-1 items-center justify-center p-3 flex w-6 h-6 text-white rounded-[50%]">
                        <p className="text-[0.8rem]">1</p>
                      </span>
                      <span>
                        <p className="font-bold text-[1.5rem]">Drive more, earn more</p>
                        <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">Our 100+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.</p>
                      </span>
                    </div>
                    <div className="flex gap-3 py">
                      <span className="bg-[#32bb78] mt-1 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                        <p className="text-[0.8rem]">2</p>
                      </span>
                      <span>
                        <p className="font-bold text-[1.5rem]">Set your schedule</p>
                        <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle.</p>
                      </span>
                    </div>
                    <div className="flex gap-3 py">
                      <span className="bg-[#32bb78] mt-1 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                        <p className="text-[0.8rem]">3</p>
                      </span>
                      <span>
                        <p className="font-bold text-[1.5rem]">Get paid each week</p>
                        <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">You’ll receive your earnings at the end of each week — no need to wait around for payday.</p>
                      </span>
                    </div>
                    <div className="pt-3">
                      <Button
                      backgroundcolor="bg-gray-100"
                      textcolor="text-black"
                      text={"Learn more"}
                      hovcol = 'bg-gray-200'
                      />
                    </div>
                  </div>
                </div>
              </div>}
            {activeButton === 2 && <div className="lg:flex lg:flex-row flex flex-col gap-[5rem] px-3 lg:px-[11rem]">
              <div className="lg:w-[53%] w-full"><img src={courier} className="rounded-2xl"/></div>
              <div className="flex flex-col justify-center lg:w-[47%] w-full">
                <h2 className="font-semibold text-[3rem] pb-7 leading-[3rem]">Make money delivering food</h2>
                <div className="flex flex-col gap-7">
                  <div className="flex gap-3 py">
                    <span className="bg-[#32bb78] mt-1 items-center justify-center p-3 flex w-6 h-6 text-white rounded-[50%]">
                      <p className="text-[0.8rem]">1</p>
                    </span>
                    <span>
                      <p className="font-bold text-[1.5rem]">Earn extra income, fast</p>
                      <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">There’s no subscription fee. You’ll receive your earnings at the end of each week.</p>
                    </span>
                  </div>
                  <div className="flex gap-3 py">
                    <span className="bg-[#32bb78] mt-1 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                      <p className="text-[0.8rem]">2</p>
                    </span>
                    <span>
                      <p className="font-bold text-[1.5rem]">Make money whenever you like</p>
                      <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour — it’s up to you.</p>
                    </span>
                  </div>
                  <div className="flex gap-3 py">
                    <span className="bg-[#32bb78] mt-1 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                      <p className="text-[0.8rem]">3</p>
                    </span>
                    <span>
                      <p className="font-bold text-[1.5rem]">Deliver your way</p>
                      <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">Bike, scooter or car — you choose how to make deliveries.</p>
                    </span>
                  </div>
                  <div className="pt-3">
                    <Button
                    backgroundcolor="bg-gray-100"
                    textcolor="text-black"
                    text={"Learn more"}
                    hovcol = 'bg-gray-200'
                    />
                  </div>
                </div>
              </div>
              </div>}
            {activeButton === 3 && <div className="lg:flex lg:flex-row flex flex-col gap-[5rem] px-3 lg:px-[11rem]">
                <div className="lg:w-[53%] w-full"><img src={restaurant} className="rounded-2xl"/></div>
                <div className="flex flex-col justify-center lg:w-[47%] w-full">
                  <h2 className="font-semibold text-[3rem] pb-7 leading-[3rem]">Increase your sales</h2>
                  <div className="flex flex-col gap-7">
                    <div className="flex gap-3 py">
                      <span className="bg-[#32bb78] mt-1 items-center justify-center p-3 flex w-6 h-6 text-white rounded-[50%]">
                        <p className="text-[0.8rem]">1</p>
                      </span>
                      <span>
                        <p className="font-bold text-[1.5rem]">Reach new customers</p>
                        <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">Millions of our users are ordering food or goods from restaurants and stores just like yours.</p>
                      </span>
                    </div>
                    <div className="flex gap-3 py">
                      <span className="bg-[#32bb78] mt-1 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                        <p className="text-[0.8rem]">2</p>
                      </span>
                      <span>
                        <p className="font-bold text-[1.5rem]">Increase your earnings</p>
                        <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">Our large network of users brings more customers and business to you.</p>
                      </span>
                    </div>
                    <div className="flex gap-3 py">
                      <span className="bg-[#32bb78] mt-1 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                        <p className="text-[0.8rem]">3</p>
                      </span>
                      <span>
                        <p className="font-bold text-[1.5rem]">Let us handle delivery</p>
                        <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">We’ll take care of the logistics, while you focus on running your business.</p>
                      </span>
                    </div>
                    <div className="pt-3">
                      <Button
                      backgroundcolor="bg-gray-100"
                      textcolor="text-black"
                      text={"Learn more"}
                      hovcol = 'bg-gray-200'
                      />
                    </div>
                  </div>
                </div>
              </div>}
            {activeButton === 4 && <div className="lg:flex lg:flex-row flex flex-col gap-[5rem] px-3 lg:px-[11rem]">
                  <div className="lg:w-[53%] w-full"><img src={fleet} className="rounded-2xl"/></div>
                  <div className="flex flex-col pt-4 justify-center lg:w-[47%] w-full">
                    <h2 className="font-semibold text-[3rem] pb-7 leading-[3rem]">Grow your transport business</h2>
                    <div className="flex flex-col gap-7">
                      <div className="flex gap-3 py">
                        <span className="bg-[#32bb78] mt-1 items-center justify-center p-3 flex w-6 h-6 text-white rounded-[50%]">
                          <p className="text-[0.8rem]">1</p>
                        </span>
                        <span>
                          <p className="font-bold text-[1.5rem]">Boost your earnings</p>
                          <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">Our large rider community means more orders per day and higher earnings.</p>
                        </span>
                      </div>
                      <div className="flex gap-3 py">
                        <span className="bg-[#32bb78] mt-1 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                          <p className="text-[0.8rem]">2</p>
                        </span>
                        <span>
                          <p className="font-bold text-[1.5rem]">Manage your assets</p>
                          <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">Easily view your vehicles, drivers and their current status.</p>
                        </span>
                      </div>
                      <div className="flex gap-3 py">
                        <span className="bg-[#32bb78] mt-1 items-center justify-center flex p-3 w-6 h-6 text-white rounded-[50%]">
                          <p className="text-[0.8rem]">3</p>
                        </span>
                        <span>
                          <p className="font-bold text-[1.5rem]">Keep track of performance</p>
                          <p className="font-normal text-[#717780] text-[1.1rem] leading-tight">Get easy access to each driver’s completed trips, invoices, and payout information.</p>
                        </span>
                      </div>
                      <div className="pt-3">
                        <Button
                        backgroundcolor="bg-gray-100"
                        textcolor="text-black"
                        text={"Learn more"}
                        hovcol = 'bg-gray-200'
                        />
                      </div>
                    </div>
                  </div>
              </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnMoney;
