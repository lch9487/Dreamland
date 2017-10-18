import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Portfolio from "./Portfolio";
import Youtube from './youtube/Youtube';
import Weather from './weather/Weather';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Portfolio} />
            <Route path="/youtube" component={Youtube} />
            <Route path="/weather" component={Weather} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
