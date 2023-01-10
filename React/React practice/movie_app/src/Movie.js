import React from "react";
import PropTypes from "prop-types";

// state가 필요하지 않은 경우는 굳이 class로 할 필요없이
// function으로 만들어도 됨
function Movie({id, year, title, summary, poster}){
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title" style={{ backgroundColor : "red" }}>
          {title}
        </h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie;