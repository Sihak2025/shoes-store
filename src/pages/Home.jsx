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
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`,
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
    <div className="w-[95%] lg:w-[90%] rounded-xl m-auto mt-5 px-4 lg:px-10 pb-10">
      <Slide />
      <div className="w-full bg-gray-200 mt-7 py-5 px-5 rounded-xl text-black">
        <h1 className="text-2xl font-bold">Recommended Movies</h1>
        <div className="w-full h-[2px] bg-gray-400 mt-5 mb-9"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {loading ? (
            <p className="col-span-full text-center py-10 font-bold">
              Loading...
            </p>
          ) : (
            movies
              .slice(0, 10)
              .map((m) => (
                <Link to={`/details/${m.id}`} className="w-full">
                  <CardMovie
                    key={m.id}
                    id={m.id}
                    img={
                      m.poster_path
                        ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
                        : "https://via.placeholder.com/500"
                    }
                    title={m.title}
                    rating={m.vote_average}
                    views={Math.round(m.popularity)}
                    des={m.overview}
                  />
                </Link>
              ))
          )}
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={page === 1}
          className={`w-[120px] h-12 bg-blue-600 text-white rounded-2xl text-xl font-bold flex items-center justify-center transition-all active:scale-95 ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500"}`}>
          <IoChevronBackOutline className="text-2xl mr-1" /> Back
        </button>
        <h1 className="text-2xl text-white font-bold bg-gray-800 px-6 py-2 rounded-full border border-gray-500 shadow-lg">
          Page {page}
        </h1>
        <button
          onClick={handleNext}
          className="w-[120px] h-12 bg-blue-600 text-white rounded-2xl text-xl font-bold flex items-center justify-center hover:bg-blue-500 transition-all active:scale-95 shadow-lg">
          Next <GrFormNext className="text-2xl ml-1 font-bold" />
        </button>
      </div>
    </div>
  );
};

export default Home;
