import { useState, useEffect } from "react";
import CardMovie from "../components/CardMovie";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}`,
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
    <div className="min-h-screen bg-black pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white">
              Popular{" "}
              <span className="text-red-600 underline decoration-1 underline-offset-8">
                TV Shows
              </span>
            </h1>
            <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase mt-4 font-bold">
              Global Archive • Page {page.toString().padStart(2, "0")}
            </p>
          </div>
          <div className="flex items-center gap-4 bg-gray-900/50 p-2 rounded-full border border-white/5">
            <button
              onClick={handleBack}
              disabled={page === 1}
              className="p-3 hover:bg-red-600 rounded-full transition-all disabled:opacity-10">
              <IoChevronBackOutline className="text-white" size={20} />
            </button>
            <span className="text-white font-black px-4 text-sm tracking-widest">
              {page}
            </span>
            <button
              onClick={handleNext}
              className="p-3 hover:bg-red-600 rounded-full transition-all">
              <GrFormNext className="text-white" size={20} />
            </button>
          </div>
        </div>
        {loading ? (
          <div className="h-[50vh] flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-black tracking-widest uppercase text-xs">
              Syncing Data...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6">
            {tvShows.map((tv) => (
              <Link
                to={`/details/tv/${tv.id}`}
                key={tv.id}
                className="hover:scale-105 transition-transform duration-300">
                <CardMovie
                  id={tv.id}
                  title={tv.name || "Untitled"}
                  img={
                    tv.poster_path
                      ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
                      : "https://via.placeholder.com/500x750?text=No+Poster"
                  }
                  rating={tv.vote_average || 0}
                  views={Math.round(tv.popularity) || 0}
                  des={tv.overview || "No description available."}
                />
              </Link>
            ))}
          </div>
        )}
        <div className="mt-20 flex justify-center border-t border-white/5 pt-10">
          <div className="flex items-center gap-12">
            <button
              onClick={handleBack}
              disabled={page === 1}
              className="group text-xs font-black uppercase tracking-[0.3em] text-white disabled:text-gray-800 transition-all flex items-center gap-2">
              <IoChevronBackOutline
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Previous
            </button>
            <div className="w-1 h-1 bg-red-600 rounded-full"></div>
            <button
              onClick={handleNext}
              className="group text-xs font-black uppercase tracking-[0.3em] text-white hover:text-red-600 transition-all flex items-center gap-2">
              Next
              <GrFormNext
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
