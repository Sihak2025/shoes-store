import { useState, useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline } from "react-icons/io5";

const Actors = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const API_KEY = "6a0e18f6910dd93a30ef7f897edc2091";

  useEffect(() => {
    const fetchActors = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&page=${page}`
        );
        const data = await res.json();
        setActors(data.results || []);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching actors:", error);
        setLoading(false);
      }
    };
    fetchActors();
  }, [page, API_KEY]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handleBack = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-[95%] lg:w-[90%] bg-gray-800 rounded-xl m-auto mt-5 px-4 lg:px-10 pb-10 shadow-2xl">
      <div className="w-full bg-gray-100 mt-7 py-6 px-6 rounded-2xl text-black text-center md:text-left">
        <h1 className="text-3xl font-black text-gray-800 uppercase tracking-widest italic">
          Popular Actors
        </h1>
        <div className="w-20 h-[5px] bg-blue-600 mt-2 mb-10 mx-auto md:mx-0 rounded-full"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {loading ? (
            <div className="col-span-full h-40 flex items-center justify-center">
               <p className="text-xl font-bold animate-bounce text-blue-600">Loading Stars...</p>
            </div>
          ) : (
            actors.map((actor) => (
              <div key={actor.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-[280px] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={actor.profile_path 
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` 
                      : "https://via.placeholder.com/500x750?text=No+Image"}
                    alt={actor.name}
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="font-bold text-lg text-gray-800 truncate">{actor.name}</h2>
                  <p className="text-blue-600 text-sm font-semibold mt-1">
                    {actor.known_for_department}
                  </p>
                  <div className="mt-3 text-[10px] text-gray-400 uppercase tracking-tighter">
                    Famous for: {actor.known_for?.[0]?.title || actor.known_for?.[0]?.name || "N/A"}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full flex items-center justify-between mt-10">
        <button
          onClick={handleBack}
          disabled={page === 1}
          className={`flex items-center gap-1 px-6 py-3 bg-white text-gray-800 rounded-xl font-bold border-2 border-gray-300 transition-all ${
            page === 1 ? "opacity-20 cursor-not-allowed" : "hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95"
          }`}
        >
          <IoChevronBackOutline size={20} /> Prev
        </button>

        <span className="text-white font-black text-xl italic underline decoration-blue-500 underline-offset-8">
          PAGE {page}
        </span>

        <button
          onClick={handleNext}
          className="flex items-center gap-1 px-6 py-3 bg-white text-gray-800 rounded-xl font-bold border-2 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95"
        >
          Next <GrFormNext size={20} />
        </button>
      </div>
    </div>
  );
};

export default Actors;