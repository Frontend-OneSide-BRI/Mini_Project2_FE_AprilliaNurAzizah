import React, { useState, useEffect } from "react";
import CategoryData from "../Data/CategoryData";

const Gallery = ({ dataCollection, isTitle, isFilter, setHandleCategory }) => {
  const handleClick = (e) => {
    const dataCategory = e.currentTarget.getAttribute("data-category");
    setHandleCategory(dataCategory);
  };

  return (
    <section>
      {isFilter && (
        <div
          id="categoryNav"
          className="flex item-center justify-center pt-4 md:pt-8 flex-wrap"
        >
          {CategoryData.map((category, i) => (
            <button
              key={i + 1}
              id="button-category"
              data-category={category.name}
              type="button"
              className="text-gray-900 border border-zinc-900 hover:border-gray-200 dark:border-gray-900 dark:bg-black dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
              onClick={handleClick}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
      <div
        id="wrapper-img"
        className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-8"
      >
        {dataCollection &&
          dataCollection.map((g, i) => {
            return (
              <div
                key={i + 1}
                className=" grid-rows-2 overflow-hidden shadow-lg cursor-pointer rounded-lg"
              >
                <img className="w-full h-[40vh] " src={g.src} alt="" />
                {isTitle && (
                  <div className="px-5 py-5 text-center ">
                    <p className=" text-center font-bold text-black text-lg">
                      {g.tittle}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Gallery;
