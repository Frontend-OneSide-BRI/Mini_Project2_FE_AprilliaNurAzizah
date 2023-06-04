import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Gallery from "../Components/Gallery";
import GalleryData from "../Data/GalleryData";
import { BsArrowRight } from "react-icons/bs";

const HomePage = () => {
  const oldMaster = GalleryData.filter((d) => d.category === "Old Master");
  const modernArt = GalleryData.filter((d) => d.category === "Modern Art");

  return (
    <div className=" overflow-y-hidden overflow-x-hidden">
      <Navbar />
      <Carousel />
      <section className="mb-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 m-7 w-[95%]"
          style={{ backgroundColor: "#f1f1e8" }}
        >
          <div className="text-center sm:text-center md:text-center pl-7 pr-7 ">
            <div className="mt-20">
              <p className="text-2xl">Welcome To</p>
              <p className="text-2xl">The Art and History</p>
              <p className="text-2xl">Ozeum Gallery</p>
              <p className="text-sm mt-3 p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                nisi possimus neque! Animi, nulla sapiente, deserunt asperiores
                eos eveniet voluptatem dolorum impedit est molestiae dicta
                temporibus quia perferendis consectetur ab.
              </p>
              <div className="flex items-center sm:items-center gap-2 sm:justify-center md:justify-center hover:scale-110 pb-5">
                <button className="text-sm mt-1">Read More</button>
                <BsArrowRight className="mt-2 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" w-[100%]">
            <img
              src="https://raw.githubusercontent.com/aprillianurazizah/right-image/main/right-img.png"
              className="w-full sm:w-[50%] md:w-[100%] mx-auto h-full"
              alt="Leonardo da Vinci"
            />
          </div>
        </div>
      </section>

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
