import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  IoArrowBack,
  IoLocationOutline,
  IoCalendarOutline,
  IoPersonOutline,
} from "react-icons/io5";

const DetailsActors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [actor, setActor] = useState(null);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "6a0e18f6910dd93a30ef7f897edc2091";

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const [personRes, creditsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`),
          fetch(
            `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${API_KEY}`,
          ),
        ]);
        const personData = await personRes.json();
        const creditsData = await creditsRes.json();
        setActor(personData);
        setCredits(
          creditsData.cast
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 10),
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching actor details:", error);
        setLoading(false);
      }
    };
    fetchActorDetails();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );

  if (!actor)
    return <div className="text-white text-center mt-20">Actor not found.</div>;

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20">
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg flex items-center justify-center w-[100px] h-8 rounded-2xl transition-colors hover:bg-blue-600">
          <IoArrowBack /> Back
        </button>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-6">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/h632${actor.profile_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={actor.name}
                className="w-full rounded-2xl shadow-2xl border-4 border-gray-800 object-cover"
              />
              <div className="mt-8 space-y-4 bg-gray-900 p-6 rounded-2xl border border-gray-800">
                <h3 className="text-xl font-bold border-b border-gray-700 pb-2">
                  Personal Info
                </h3>
                <div className="flex items-center gap-3">
                  <IoPersonOutline className="text-blue-500" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Known For</p>
                    <p className="text-sm">{actor.known_for_department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <IoCalendarOutline className="text-blue-500" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Birthday</p>
                    <p className="text-sm">{actor.birthday || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <IoLocationOutline className="text-blue-500" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      Place of Birth
                    </p>
                    <p className="text-sm text-gray-300 leading-tight">
                      {actor.place_of_birth || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-black mb-2 italic tracking-tighter">
              {actor.name}
            </h1>
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4 text-blue-500 uppercase tracking-widest">
                Biography
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {actor.biography ||
                  `We don't have a biography for ${actor.name} yet.`}
              </p>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-widest">
                Best Known For
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {credits.map((work) => (
                  <div
                    key={work.id}
                    className="group cursor-pointer"
                    onClick={() =>
                      navigate(
                        work.media_type === "tv"
                          ? `/tv/${work.id}`
                          : `/movie/${work.id}`,
                      )
                    }>
                    <div className="relative overflow-hidden rounded-xl h-48 bg-gray-800">
                      <img
                        src={
                          work.poster_path
                            ? `https://image.tmdb.org/t/p/w200${work.poster_path}`
                            : "https://via.placeholder.com/200x300"
                        }
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={work.title}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                        <p className="text-[10px] font-bold uppercase">
                          {work.media_type}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm mt-2 font-semibold truncate group-hover:text-blue-400">
                      {work.title || work.name}
                    </p>
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

export default DetailsActors;
