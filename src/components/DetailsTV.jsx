import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {IoArrowBack,IoStar,IoCalendarOutline,IoLayersOutline,} from "react-icons/io5";

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
          `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=credits,videos`
        );
        const data = await res.json();
        setShow(data);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching details:", error);
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-black tracking-widest uppercase text-xs">Accessing Data...</p>
      </div>
    );
  if (!show) return <div className="text-white text-center mt-10">Show not found.</div>;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <div className="relative h-[60vh] lg:h-[85vh] w-full overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
          alt={show.name}
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 p-3 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-red-600 hover:border-red-600 rounded-full transition-all group z-50"
        >
          <IoArrowBack size={24} className="group-active:-translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 -mt-48 lg:-mt-64 relative z-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shrink-0 mx-auto lg:mx-0">
            <div className="relative group">
               <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                className="rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 group-hover:border-red-600/50 transition-all duration-500"
              />
              <div className="absolute top-6 right-6 bg-red-600 px-4 py-1 rounded-full text-xs font-black italic tracking-tighter shadow-lg">
                HD 4K
              </div>
            </div>
          </div>
          <div className="flex-1 lg:pt-20">
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-6">
              {show.name}
            </h1>
            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm font-bold tracking-widest text-gray-400 mb-8 border-y border-white/5 py-6">
              <div className="flex items-center gap-2 text-yellow-500">
                <IoStar /> <span>{show.vote_average?.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-2">
                <IoCalendarOutline className="text-red-600" /> 
                <span>{show.first_air_date?.split("-")[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLayersOutline className="text-red-600" /> 
                <span>{show.number_of_seasons} SEASONS</span>
              </div>
              <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white">
                {show.status?.toUpperCase()}
              </span>
            </div>
            <p className="text-xl md:text-2xl text-red-500/80 leading-relaxed mb-6 font-light italic opacity-90">
              "{show.tagline || "A cinematic experience like no other."}"
            </p>
            <div className="mb-10">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-4">Synopsis</h3>
              <p className="text-gray-300 leading-8 text-lg font-light max-w-3xl">
                {show.overview}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-12">
              {show.genres?.map((g) => (
                <span
                  key={g.id}
                  className="px-5 py-2 bg-gray-900 border border-gray-800 hover:border-red-600 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors cursor-default"
                >
                  {g.name}
                </span>
              ))}
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-6">Lead Cast</h3>
              <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                {show.credits?.cast?.slice(0, 6).map((person) => (
                  <div key={person.id} className="shrink-0 group">
                    <div className="relative w-20 h-20 mb-3">
                       <img
                        src={person.profile_path ? `https://image.tmdb.org/t/p/w200${person.profile_path}` : "https://via.placeholder.com/200"}
                        className="w-full h-full object-cover rounded-full border-2 border-gray-800 group-hover:border-red-600 transition-all shadow-xl"
                        alt={person.name}
                      />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-tighter text-center w-20 truncate">{person.name}</p>
                    <p className="text-[8px] text-gray-600 uppercase text-center w-20 truncate">{person.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTV;