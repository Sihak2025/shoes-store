import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaPlay, FaArrowLeft } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "6a0e18f6910dd93a30ef7f897edc2091";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching details:", error);
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-white bg-gray-900 text-2xl">
        Loading...
      </div>
    );
  if (!movie)
    return (
      <div className="h-screen flex items-center justify-center text-white bg-gray-900">
        Movie not found!
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-10">
      <div className="relative w-full h-[50vh] lg:h-[70vh]">
        <img
          className="w-full h-full object-cover opacity-40"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-10 left-10 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all cursor-pointer">
          <FaArrowLeft size={20} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-40 relative z-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[350px] shrink-0">
            <img
              className="w-full rounded-2xl shadow-2xl border-4 border-gray-800"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-black mb-4">
              {movie.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <span className="flex items-center gap-2 text-yellow-400 font-bold text-xl">
                <FaStar /> {movie.vote_average?.toFixed(1)}
              </span>
              <span className="flex items-center gap-2 text-gray-300">
                <IoMdTime size={22} /> {movie.runtime} min
              </span>
              <span className="bg-blue-600 px-3 py-1 rounded-md text-sm font-bold uppercase">
                {movie.release_date?.split("-")[0]}
              </span>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2 text-blue-400">Genres</h2>
              <div className="flex gap-2">
                {movie.genres?.map((g) => (
                  <span
                    key={g.id}
                    className="bg-gray-800 px-4 py-1 rounded-full text-sm">
                    {g.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2 text-blue-400">Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {movie.overview}
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-xl transition-transform active:scale-95 cursor-pointer shadow-lg shadow-blue-900/20">
                <FaPlay /> Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
