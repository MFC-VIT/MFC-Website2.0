import React from "react";

function SponsorLogo({ name, description, image }) {
  return (
    <div className="flex items-start text-center h-full"> 
      {image ? (
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 flex justify-center items-center">
            <img src={image} alt={`${name} logo`} className="object-contain w-full h-full" />
          </div>
          <h2 className="text-lg font-bold mt-2">{name}</h2>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-orangeLogo flex justify-center items-center">
            <span className="text-2xl font-apex font-bold ">LOGO</span>
          </div>
          <h2 className="text-lg font-apex font-bold mt-2">{name}</h2>
          <p className="text-sm font-apex text-gray-400">{description}</p>
        </div>
      )}
      <div className="w-px h-full bg-orangeLogo mx-2"></div>
    </div>
  );
}

export default SponsorLogo;
