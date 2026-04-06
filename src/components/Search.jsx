import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardMovie from "../components/CardMovie";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = "6a0e18f6910dd93a30ef7f897edc2091";

  useEffect(() => {
    // ប្រើ Debounce: ចាំទាល់តែអ្នកឈប់វាយ ៣០០មិល្លីវិនាទី ទើបបាញ់ API
    const delayDebounceFn = setTimeout(() => {
      if (query.trim().length > 0) {
        fetchSearchData();
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const fetchSearchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&language=en-US`
      );
      const data = await res.json();
      setResults(data.results || []);
      setLoading(false);
    } catch (error) {
      console.error("Search Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 lg:p-12">
      {/* <div className="mb-10">
        <h2 className="text-gray-400 text-lg">Search Results for:</h2>
        <h1 className="text-3xl font-black text-red-600 italic">"{query}"</h1>
      </div> */}

      {loading && (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      )}

      {!loading && results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {results.map((item) => (
            // បង្ហាញតែ Movie និង TV Show (មិនបង្ហាញ Actor ក្នុង Grid នេះទេ)
            (item.media_type === "movie" || item.media_type === "tv") && (
              <CardMovie
                key={item.id}
                id={item.id}
                title={item.title || item.name}
                img={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "https://via.placeholder.com/500x750?text=No+Poster"}
                rating={item.vote_average || 0}
                views={Math.round(item.popularity)}
                des={item.overview}
              />
            )
          ))}
        </div>
      ) : (
        !loading && query && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl italic">No results found for your search.</p>
          </div>
        )
      )}
    </div>
  );
};

export default Search;