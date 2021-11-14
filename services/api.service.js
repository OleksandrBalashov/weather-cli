import axios from 'axios';
import https from 'https';
import { getKeyValue } from './storage.service.js';

export const getWeather = async city => {
  try {
    const { token } = await getKeyValue('token');

    if (!token) {
      throw new Error('Не задан ключ API');
    }
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: token,
          lang: 'ru',
          units: 'metric',
        },
      }
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
