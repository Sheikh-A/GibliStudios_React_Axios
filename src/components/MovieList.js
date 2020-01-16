import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function MovieList() {
  const [films, setFilms] = useState([]);
  const didUpdate = () => {
    //step 3 - axios calls API
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        //step4 --> we get a response.data -> array of data
        //step5 -> set state of films = new data
        setFilms(response.data);
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  useEffect(didUpdate, []);
  //step2 - call the function in use Effect

  //Step 7 - check for dependency array

  //step 1: render what is in JSX
  //films = []
  //

  //step 6: render function is called again (rerender)
  //fimls  = array [API films]
  return (
    <div className="film">
      {films.map(film => {
        return <MovieCard film={film} key={film.id} />;
      })}
    </div>
  );
}
