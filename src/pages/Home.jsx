import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";
import CardMovie from "../components/CardMovie";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline } from "react-icons/io5";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const API_KEY = "6a0e18f6910dd93a30ef7f897edc2091";

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
        );
        const data = await res.json();
        setMovies(data.results || []);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page, API_KEY]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handleBack = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-[98%] lg:w-[90%] m-auto mt-2 md:mt-5 px-2 md:px-4 lg:px-10 pb-10">
      <Slide />
      <div className="w-full bg-gray-100 dark:bg-gray-800 mt-7 py-5 px-3 md:px-5 rounded-2xl text-black dark:text-white shadow-sm">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Recommended Movies</h1>
        <div className="w-full h-[2px] bg-gray-300 dark:bg-gray-700 mb-8"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
          {loading ? (
            <div className="col-span-full text-center py-20 flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-bold text-gray-500">Loading Movies...</p>
            </div>
          ) : (
            movies.slice(0, 15).map((m) => (
              <Link 
                to={`/details/${m.id}`} 
                key={m.id} 
                className="w-full transition-transform hover:scale-105 duration-300"
              >
                <CardMovie
                  id={m.id}
                  img={
                    m.poster_path
                      ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
                      : "https://via.placeholder.com/500x750?text=No+Poster"
                  }
                  title={m.title}
                  // Fix: Ensure rating is a number and handle missing values
                  rating={m.vote_average ? Number(m.vote_average) : 0}
                  views={Math.round(m.popularity)}
                  des={m.overview}
                />
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-10 gap-6 sm:gap-0">
        <button
          onClick={handleBack}
          disabled={page === 1}
          className={`w-full sm:w-[130px] h-12 bg-blue-600 text-white rounded-xl text-lg font-bold flex items-center justify-center transition-all active:scale-95 ${
            page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-blue-700 shadow-lg"
          }`}
        >
          <IoChevronBackOutline className="text-xl mr-1" /> Back
        </button>
        <div className="order-first sm:order-none">
          <h1 className="text-lg md:text-xl text-white font-bold bg-gray-900 px-6 py-2 rounded-full border border-gray-700 shadow-md">
            Page {page}
          </h1>
        </div>
        <button
          onClick={handleNext}
          className="w-full sm:w-[130px] h-12 bg-blue-600 text-white rounded-xl text-lg font-bold flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95 shadow-lg"
        >
          Next <GrFormNext className="text-xl ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Home;