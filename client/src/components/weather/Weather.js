import React, { Component } from "react";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="https://rocky-fortress-51379.herokuapp.com/">
            Back To Index
          </a>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
