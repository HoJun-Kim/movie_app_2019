import React from 'react';
import PropTypes from 'prop-types';

//state가 필요없는 이 movie컴포넌트는 class로 만들 필요가없겠지?
function Movie({id,year,title,summary,poster}){
    return <h5>{title}</h5>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year  : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie; //don't forget