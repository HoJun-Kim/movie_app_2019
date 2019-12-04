import React from 'react';

function Food({name, picture}){ //or ({props})
  return(
    <div>
      <h2>I like {name}</h2> 
      <img src={picture} />
    </div>
  ) 
}

const foodILike = [
  {
    name : "Kimchi",
    image:
      "http://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/29505_kimchi_3000x2000.jpg"
  },
  {
    name : "samgyopsal",
    image :
      "https://pbs.twimg.com/media/EAo2Vv3UIAA3Dos.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} /> )}
    </div>
  );
}

export default App;
