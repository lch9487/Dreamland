import React from "react";
import Header from "./Header";
import Background from './Background';
import About from './About';
import Portfolio from './Portfolio';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <div>
      <Header />
      <Background />
      <About />
      <Portfolio />
    </div>
  );
};
