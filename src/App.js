import React from 'react';

//class component. state에 관하여
class App extends React.Component{
  state = {
    count : 0
  };
  
  add = () => {this.setState({count : this.state.count + 1})};
  //state를 set할때 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법 아래
  //리액트는 현재 스테이트를 준다. 위 보다 좋은 소스.
  minus = () => {this.setState(current => ({count : current.count - 1}))};
  render(){

  return( 
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button> 
      <button onClick={this.minus}>Minus</button>
    </div>)
  }
}

export default App;
