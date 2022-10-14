import axios from "./axios";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    //TODO::functionを書き換える
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log("URL?", fetchUrl, axios);

      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/*ポスターコンテンツ */}
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }
            
            `}
          />
        ))}
      </div>
    </div>
  );
};
