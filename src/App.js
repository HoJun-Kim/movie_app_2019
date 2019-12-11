import React from 'react';
import axios from 'axios'; //싱글쿼츠 더블쿼츠 결과가 다른데..? 이게 최신인가..?
import Movie from './Movie'; // 동일 패키지라는뜻
import './App.css';

//class component. state에 관하여
class App extends React.Component{
  state = {
    isLoading : true, //마운트 되자마자 isLoading은 기본적으로 true
    movies : []
  };

//또다른 방법
  getMovies = async () => {
    //이하 movies.data.data.movies의 es6 최신소스활용 
      const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      this.setState({movies, isLoading:false}); //state.movies : axios.movies
  };

  componentDidMount(){
    this.getMovies();
  };

  //axios는 느릴 수 있다. async 비동기 선언
  //async componentDidMount(){//마운트+렌더링 다음 호출되는 컴포넌트 
  //  const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  //}

  render() {  
    const {isLoading, movies} = this.state; //ES6 문법. 늘 this를 적기 귀찮으니까
    return(
    <section className="container">
      {isLoading ? (
      <div className="loader">
      <span className = "loader_text">Loading...</span>
      </div> ) : (
        <div className="movies">
          {movies.map(movie => (
                <Movie 
                  key = {movie.id}
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  genres={movie.genres}
                />
              ))}
        </div>
        )}
       </section>
      );
    }
  }

export default App;
