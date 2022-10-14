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

export const Row = ({ title, fetchUrl }: Props) => {
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

  return <div className="Row">{title}</div>;
};
