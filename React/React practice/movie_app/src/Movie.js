import React from "react";
import PropTypes from "prop-types";

// state가 필요하지 않은 경우는 굳이 class로 할 필요없이
// function으로 만들어도 됨
function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;