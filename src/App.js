import React from 'react';

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image:
      "http://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/29505_kimchi_3000x2000.jpg"
  },
  {
    id : 2,
    name : "samgyopsal",
    image :
      "https://pbs.twimg.com/media/EAo2Vv3UIAA3Dos.jpg"
  }
]

function Food({name, picture}){ //or ({props})
  return(
    <div>
      <h2>I like {name}</h2> 
      <img src={picture} alt={name}/> {/*img elements must have an alt prop*/ }
    </div>
  ) 
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} /> ))} 
        {/*list에 넣는 순간 원자성을 잃어버린다. key값으로 유일한 값을 넘겨주어야한다. 여기서
          key는 리액트 내부에서 사용하기 위한것이다.*/}
    </div>
  );
}

export default App;
