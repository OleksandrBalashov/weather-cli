import axios from 'axios';
import { getKeyValue } from './storage.service.js';

export const getIcon = icon => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️';
    case '02':
      return '🌤️';
    case '03':
      return '☁️';
    case '04':
      return '☁️';
    case '09':
      return '🌧️';
    case '10':
      return '🌦️';
    case '11':
      return '🌩️';
    case '13':
      return '❄️';
    case '50':
      return '🌫️';
  }
};

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

    return data;
  } catch (err) {
    console.log(err.message);
  }
};
