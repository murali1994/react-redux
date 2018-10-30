import axios from 'axios';
const API_KEY ='f86726ab19393cd71942b4e321af9c27';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//const ROOT_URL ='http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
console.log('Request:',request);
  return{
    type:FETCH_WEATHER,
    payload: request
  };

}
