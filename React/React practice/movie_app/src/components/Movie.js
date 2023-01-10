import React from "react";
import PropTypes from "prop-types";

// state가 필요하지 않은 경우는 굳이 class로 할 필요없이
// function으로 만들어도 됨
function Movie({id, year, title, summary, poster, genres}){
  return (
    <div className="movie">
      <label htmlFor=""></label>
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">
          {title}
        </h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;