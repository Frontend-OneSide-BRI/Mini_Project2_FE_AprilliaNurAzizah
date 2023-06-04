import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Gallery from "../Components/Gallery";
import GalleryData from "../Data/GalleryData";

const HomePage = () => {
  const oldMaster = GalleryData.filter((d) => d.category === "Old Master");
  const modernArt = GalleryData.filter((d) => d.category === "Modern Art");

  return (
    <div>
      <Navbar />
      <Carousel />
      <h1 className="m-7 font-bold text-2xl mb-0 text-neutral-950  text-center">
        Old Master
      </h1>
      <hr className=" m-5 h-[2px] bg-gray-500" />
      <Gallery dataCollection={oldMaster} />
      <h1 className="m-7 font-bold text-2xl mb-0 text-neutral-950 text-center">
        Modern Art
      </h1>
      <hr className=" m-5 h-[2px] bg-gray-500" />

      <Gallery dataCollection={modernArt} />
      <Footer />
    </div>
  );
};

export default HomePage;
