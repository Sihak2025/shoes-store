import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const CardMovie = ({ id, img, title, rating, views, des }) => {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="relative w-full h-[250px]">
        <img className="w-full h-full object-cover" src={img} alt={title} />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h1
          className="text-lg font-bold text-gray-800 truncate mb-2"
          title={title}>
          {title}
        </h1>
        <div className="flex items-center justify-between mb-3">
          <span className="text-yellow-500 text-sm font-bold flex gap-1 items-center bg-yellow-50 px-2 py-1 rounded-md">
            <FaStar /> {rating.toFixed(1)}
          </span>
          <span className="text-gray-500 text-sm font-medium flex gap-1 items-center">
            {views >= 1000 ? (views / 1000).toFixed(1) + "k" : views}{" "}
            <IoMdEye className="text-lg" />
          </span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 h-[40px] mb-4">
          {des}
        </p>
          <button className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 active:scale-95 transition-all cursor-pointer">
            Watch Now
          </button>
      </div>
    </div>
  );
};

export default CardMovie;
