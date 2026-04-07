import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  IoArrowBack,
  IoStar,
  IoTimeOutline,
  IoCalendarOutline,
} from "react-icons/io5";

const DetailsTV = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "6a0e18f6910dd93a30ef7f897edc2091";

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=credits,videos`,
        );
        const data = await res.json();
        setShow(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching details:", error);
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-white text-2xl animate-pulse">
        Loading Details...
      </div>
    );
  if (!show)
    return <div className="text-white text-center mt-10">Show not found.</div>;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="relative h-[50vh] lg:h-[70vh] w-full">
        <img
          src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
          alt={show.name}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 p-3 bg-black/50 hover:bg-blue-600 rounded-full transition-all">
          <IoArrowBack size={24} />
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-10 pb-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="rounded-3xl shadow-2xl border-4 border-gray-800"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {show.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
              <div className="flex items-center gap-2 text-yellow-500 font-bold">
                <IoStar /> {show.vote_average?.toFixed(1)}
              </div>
              <div className="flex items-center gap-2">
                <IoCalendarOutline /> {show.first_air_date?.split("-")[0]}
              </div>
              <div className="flex items-center gap-2">
                <IoTimeOutline /> {show.number_of_seasons} Seasons
              </div>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/50 rounded-lg text-sm uppercase">
                {show.status}
              </span>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 italic">
              {show.tagline || "No tagline available."}
            </p>
            <h3 className="text-2xl font-bold mb-3">Overview</h3>
            <p className="text-gray-300 leading-7 mb-8">{show.overview}</p>
            <div className="flex flex-wrap gap-3 mb-10">
              {show.genres?.map((g) => (
                <span
                  key={g.id}
                  className="px-4 py-2 bg-gray-800 rounded-xl text-sm font-medium">
                  {g.name}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-4">Top Cast</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {show.credits?.cast?.slice(0, 5).map((person) => (
                <div key={person.id} className="shrink-0 text-center w-24">
                  <img
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                        : "https://via.placeholder.com/200"
                    }
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-2 border-2 border-gray-700"
                    alt={person.name}
                  />
                  <p className="text-xs font-bold truncate">{person.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTV;
