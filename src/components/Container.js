import React from "react";
import Tabs from "./Tabs";
import Gallery from "./Gallery";

const Container = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#272B30] w-full max-w-[1500] md:w-[1250px] md:h-auto max-h-[1200px] lg:h-[600px] mt-10 mx-8 lg:mx-12 rounded-3xl p-4 shadow-[10px_10px_40px_10px_rgba(0,0,0,0.5)]">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
        {/* Add content for the left side if needed */}
      </div>
      <div className="w-full lg:w-1/2">
        <Tabs />
        <div className="h-[5px] w-full lg:w-[500px] mx-auto my-4 bg-gradient-to-b from-[#2828281a] to-[#f8f8f81a] shadow-[0_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[4.91866px] rounded-[2.45933px]"></div>
        <Gallery />
        <div className="h-[5px] w-full lg:w-[500px] mx-auto my-4 bg-gradient-to-b from-[#2828281a] to-[#f8f8f81a] shadow-[0_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[4.91866px] rounded-[2.45933px]"></div>
      </div>
    </div>
  );
};

export default Container;
