import React from "react";
import youtube from '../img/youtube.jpg';
import weather from '../img/weather.jpg';
import emaily from '../img/emaily.jpg';

export default () => {
  return (
    <div>
      <a href="/youtube">
        <img style={{ width: '400px', height: '300px' }} alt="youtube" src={youtube} />
      </a>
      <a href="/weather">
        <img style={{ width: '400px', height: '300px' }} alt="weather" src={weather} />
      </a>
      <a href="https://protected-dawn-64940.herokuapp.com/">
        <img style={{ width: '400px', height: '300px' }} alt="emaily" src={emaily} />
      </a>
    </div>
  );
};
