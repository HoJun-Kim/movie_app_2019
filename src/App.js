import React from 'react';
import PropTypes from "prop-types";


const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image:
      "http://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/29505_kimchi_3000x2000.jpg",
    rating:5.0
  },
  {
    id : 2,
    name : "samgyopsal",
    image :
      "https://pbs.twimg.com/media/EAo2Vv3UIAA3Dos.jpg",
    rating:4.9
  }
];

function Food({name, picture, rating }){ //or ({props})
  return(
    <div>
      <h2>I like {name}</h2> 
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/> {/*img elements must have an alt prop*/ }
    </div>
  ) 
}

//prop검사펑션.콘솔에 표시해줌.시각적인 에러는 없음. 대소문자 조심.propTypes
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating:PropTypes.number /*not string, it is number& isRequired는 필수라는뜻*/ 
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} /> ))} 
        {/*list에 넣는 순간 원자성을 잃어버린다. key값으로 유일한 값을 넘겨주어야한다. 여기서
          key는 리액트 내부에서 사용하기 위한것이다.*/}
    </div>
  );
}

export default App;
