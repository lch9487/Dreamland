import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Youtube from './youtube/Youtube';
import Weather from './weather/Weather';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/youtube" component={Youtube} />
            <Route path="/weather" component={Weather} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
