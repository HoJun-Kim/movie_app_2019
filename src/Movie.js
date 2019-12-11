import React from 'react';
import PropTypes from 'prop-types';

//state가 필요없는 이 movie컴포넌트는 class로 만들 필요가없겠지?
function Movie({id,year,title,summary,poster}){
    return <div class="movie">
            <img src={poster} alt={title} title={title} />
        <div class="movie_data">
        <h3 class="movie_title">{title}</h3>
        <h5 class="movie_year">{year}</h5>
        <p class="movie_summary">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year  : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie; //don't forget