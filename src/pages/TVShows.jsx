import { useState, useEffect } from "react";
import CardMovie from "../components/CardMovie"; // យើងប្រើ Component Card រួមគ្នាបាន
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline } from "react-icons/io5";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const API_KEY = "6a0e18f6910dd93a30ef7f897edc2091";

  useEffect(() => {
    const fetchTvShows = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}`
        );
        const data = await res.json();
        setTvShows(data.results || []);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching TV shows:", error);
        setLoading(false);
      }
    };
    fetchTvShows();
  }, [page, API_KEY]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handleBack = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-[95%] lg:w-[90%] bg-gray-800 rounded-xl m-auto mt-5 px-4 lg:px-10 pb-10 shadow-2xl">
      <div className="w-full bg-gray-100 mt-7 py-6 px-6 rounded-2xl text-black">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black text-gray-800 uppercase tracking-wider">
            Popular TV Shows
          </h1>
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full font-bold">
            Page {page}
          </span>
        </div>
        <div className="w-full h-[3px] bg-blue-600 mt-4 mb-10 opacity-30"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {loading ? (
            <div className="col-span-full h-60 flex items-center justify-center">
              <p className="text-2xl font-bold animate-pulse text-gray-500">Loading TV Shows...</p>
            </div>
          ) : (
            tvShows.map((tv) => (
              <CardMovie
                key={tv.id}
                id={tv.id}
                title={tv.name || "No Name"} 
                img={
                  tv.poster_path
                    ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Poster"
                }
                rating={tv.vote_average || 0}
                views={Math.round(tv.popularity) || 0}
                des={tv.overview || "No description available."}
              />
            ))
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-10 px-2">
        <button
          onClick={handleBack}
          disabled={page === 1}
          className={`group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold transition-all active:scale-95 ${
            page === 1 ? "opacity-30 cursor-not-allowed grayscale" : "hover:bg-blue-500 shadow-lg shadow-blue-900/40"
          }`}
        >
          <IoChevronBackOutline size={24} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="hidden sm:block">
          <p className="text-gray-400 font-medium">Viewing page {page} of popular series</p>
        </div>
        <button
          onClick={handleNext}
          className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 active:scale-95 transition-all shadow-lg shadow-blue-900/40"
        >
          Next
          <GrFormNext size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default TvShows;