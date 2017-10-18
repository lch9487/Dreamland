import axios from "axios";

const API_KEY = "64577e58f0a32f8831f9df6add68326e";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city) => async dispatch => {
  const url = `${ROOT_URL}&q=${city},TW`;
  const res = await axios.get(url);
  dispatch({ type: FETCH_WEATHER, payload: res });
};
