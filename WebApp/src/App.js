import React from 'react';
import CityBox from './Components/City/CityBox';
import WeatherModal from './Components/Weather/WeatherCard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <div className="topnav">
            <Link className="linkNav "to="/">Home</Link>
          </div>
          <br/>
          <header className="App-header">
            <Route path="/" exact component={() => <CityBox/>} />
            <Route path="/weather" render={() => <WeatherModal {...this.props} />} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
