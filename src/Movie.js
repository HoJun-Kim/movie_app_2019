import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//state가 필요없는 이 movie컴포넌트는 class로 만들 필요가없겠지?
function Movie({year,title,summary,poster,genres}){
    return <div className="movie">
            <img src={poster} alt={title} title={title} /> 
        <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">
            {genres.map((genre, index) => (
                <li key={index} className="genres_genre">
                    {genre}
                </li>
            ))}
        <p className="movie_summary">{summary}</p>
                </ul>
        </div>
    </div>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year  : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie; //don't forget