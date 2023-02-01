import React, { useState } from "react";
import axios from "axios";

interface ResultProps {
  title: string;
  streamingInfo: {
    country: string;
    service: string;
    type: string;
  };
  imdbRating: number;
}

const Search: React.FC = () => {
  const [results, setResults] = useState<ResultProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const service: any = ['netflix', 'prime', 'disney', 'hbo', 'hulu', 'peacock', 'paramount', 'apple'];
  const filmType: any = ['movie', 'series'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://streaming-availability.p.rapidapi.com/search/basic/?query="${searchTerm}"&country="us"&service="hbo"&type="movie"`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": import.meta.env.VITE_MOVIE_KEY
          }
        }
      );
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
    <h1 className="text-white font-bold my-4">Film Finder</h1>
      <div className="w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="searchTerm"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search for a movie or TV show..."
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-white-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Find
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

