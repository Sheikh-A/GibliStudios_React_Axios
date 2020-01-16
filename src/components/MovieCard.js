import React from "react";

// const MovieCard = props => {
//   return (
//     <div className="film-list">
//       <h2>{props.film.title}</h2>
//       <p>{props.film.description}</p>
//       <div className="bottom">
//         <p>{props.film.director}</p>
//         <p>{props.film.release_date}</p>
//       </div>
//     </div>
//   );
// };
//option 2
const MovieCard = props => {
const film = props.film;
  return (
    <div className="film-list">
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <div className="bottom">
        <p>{film.director}</p>
        <p>{film.release_date}</p>
      </div>
    </div>
  );
};


export default MovieCard;
