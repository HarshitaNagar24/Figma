import React, { useState } from "react";
import image from "../assets/image.png";
import vector from "../assets/Vector.png";
import frame from "../assets/Frame 1000002250.png";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

const Gallery = () => {
  const [images, setImages] = useState([
    image,
    image,
    image
  ]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // For demonstration purposes, using URL.createObjectURL to display the image
      const newImageUrl = URL.createObjectURL(file);
      setImages([...images, newImageUrl]);
    }
  };

  return (
    <div className="flex flex-row shadow-lg shadow-[5.67px_5.67px_3.78px_0_rgba(0,0,0,0.4)] bg-[#2E3338] rounded-2xl p-4 h-[250px]">
      <div className="w-[50px] h-[159.69px] gap-[105px] p-1 mr-2">
        <div className="w-20 h-20 opacity-0 sm:opacity-100">
          <img src={vector} alt="quest" />
        </div>
        <div className="w-20 h-20">
          <img src={frame} alt="quest" />
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div>
            <button className="w-[115px] h-[49px] text-white font-Poppins font-medium mb-2 sm:mb-0 bg-[#171717] rounded-2xl">
              Gallery
            </button>
          </div>
          <div className="flex row gap-3">
            <label
              htmlFor="file-upload"
              className="bg-[#41464D] text-white font-Plus Jakarta Sans text-[12px] shadow-lg relative w-[130.32px] h-[35px] rounded-[104px] shadow-[9px_10px_7.1px_0_rgba(0,0,0,0.4),_-0.5px_-0.5px_6.9px_0_rgba(255,255,255,0.25)] cursor-pointer flex justify-center items-center"
            >
              + ADD IMAGE
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <div
              className="relative w-[35px] h-[35px] rounded-full flex justify-center items-center"
              style={{
                background: "linear-gradient(#1F2225 100%, #161718 100%)",
                boxShadow: `4px 5px 30px 5px rgba(16, 18, 19, 1),-5px -3px 30px -10px rgba(150, 190, 231, 1)`,
              }}
            >
              <img src={leftArrow} alt="Left Arrow" />
            </div>
            <div
              className="relative w-[35px] h-[35px] rounded-full flex justify-center items-center"
              style={{
                background: "linear-gradient(#1F2225 100%, #161718 100%)",
                boxShadow: `4px 5px 30px 5px rgba(16, 18, 19, 1),-5px -3px 30px -10px rgba(150, 190, 231, 1)`,
              }}
            >
              <img src={rightArrow} alt="Right Arrow" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index}`}
              className="w-[100px] h-[100px] md:w-[160px] md:h-auto rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
