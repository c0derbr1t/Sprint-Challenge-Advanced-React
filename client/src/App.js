import React from 'react';
import axios from 'axios';

import Mode from './components/Mode';
import Cards from './components/Cards';

import './App.css';

class App extends React.Component {
  state = {
    playerData: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players/')
      .then(res => {
        console.log(res.data);
        this.setState({
          playerData: res.data
        })})
      .catch(err => console.log(err));
  }

  render() {
  return (
    <div className="App">
      <div data-testid="mode-btn">
        <Mode /> 
      </div>
      
      <header className="App-header">
        <h1 data-testid="title">Women's World Cup Players</h1>
        <h3>The following women are the Women's World Cup players, ranked by search interest from Google Trends from June-July 2019, worldwide.</h3>
      </header>
      <div>
        <Cards playerData={this.state.playerData} />
      </div>
      <footer><a href="https://googletrends.github.io/data/">Click here to find more data trends like this!</a></footer>
    </div>
  );
  }
}

export default App;
