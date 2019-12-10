import React from 'react';
import axios from 'axios';

//class component. state에 관하여
class App extends React.Component{
  state = {
    isLoading : true, //마운트 되자마자 isLoading은 기본적으로 true
    movies : []
  };

  componentDidMount(){//가장 먼저 호출되는 컴포넌트죠? 
    axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  render() {  
    const {isLoading} = this.state; //ES6 문법. 늘 this를 적기 귀찮으니까
    return(
    <div>{isLoading ? "Loading" : "We are ready" }</div>)
  }
}

export default App;
