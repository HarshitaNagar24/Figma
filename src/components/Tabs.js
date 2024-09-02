import React, { useState } from "react";
import image from "../assets/Vector.png";
import frame from "../assets/Frame 1000002250.png"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex flex-row shadow-lg shadow-[5.67px_5.67px_3.78px_0_rgba(0,0,0,0.4)] bg-[#2E3338] rounded-2xl h-[250px] sm:2 md:p-8 lg:p-4">
      <div className="w-[50px] h-[159.69px] gap-[105px] p-1 mr-2 opacity-0 sm:opacity-100">
        <div className="w-20 h-20"> <img src={image} alt="quest"/></div>
        <div className="w-20 h-20"> <img src={frame} alt="quest"/></div>
      </div>
      <div>
      <div className=" flex flex-row sm:justify-between justify-center items-center sm:mb-4 p-1 mr-4 rounded-2xl bg-[#171717] ]">
        <button
          className={`py-2 px-4 rounded font-poppins text-sm sm:text-base font-medium ${
            activeTab === "about"
              ? "bg-[#28292f] text-white rounded-xl px-6 shadow-custom"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`py-2 px-4 rounded font-poppins text-sm sm:text-base font-medium ${
            activeTab === "experiences"
              ? "bg-[#28292f] text-white rounded-xl px-6"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("experiences")}
        >
          Experiences
        </button>
        <button
          className={`py-2 px-4 rounded font-poppins text-sm sm:text-base font-medium ${
            activeTab === "recommended"
              ? "bg-[#28292f] text-white rounded-xl px-6"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("recommended")}
        >
          Recommended
        </button>
      </div>
      <div className="mt-4 text-white pb-1 sm:h-[calc(100%-56px)] overflow-hidden ">
        {activeTab === "about" && (
          <div className="font-plus-jakarta-sans text-sm sm:text-lg font-normal leading-relaxed text-[#969696]">
            <p className="sm:mb-4">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.
            </p>
            <p>
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old
              twin daughters - Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9–10 AM.
            </p>
            <div className="absolute w-1.5 h-12 top-[145px] left-[1270px] rounded-[8px] bg-custom-gradient  shadow-[4px 4px 4.9px rgba(0, 0, 0, 0.25)]"></div>
          </div>
        )}

        {activeTab === "experiences" && (
          <div className="font-plus-jakarta-sans text-sm sm:text-lg font-normal leading-relaxed text-[#969696]">
            <p className="mb-4">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.
            </p>
            <p>
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old
              twin daughters - Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9–10 AM.
            </p>
            <div className="absolute w-1.5 h-12 top-[145px] left-[1270px] rounded-[8px] bg-custom-gradient  shadow-[4px 4px 4.9px rgba(0, 0, 0, 0.25)]"></div>
          </div>
        )}
        {activeTab === "recommended" && (
          <div className="font-plus-jakarta-sans text-sm sm:text-lg font-normal leading-relaxed text-[#969696]">
            <p className="mb-4">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.
            </p>
            <p>
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old
              twin daughters - Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9–10 AM.
            </p>
            <div className="absolute w-1.5 h-12 top-[145px] left-[1270px] rounded-[8px] bg-custom-gradient  shadow-[4px 4px 4.9px rgba(0, 0, 0, 0.25)]"></div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Tabs;
