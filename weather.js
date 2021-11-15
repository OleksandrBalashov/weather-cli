#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getIcon, getWeather } from './services/api.service.js';
import {
  printHelp,
  printSuccess,
  printError,
  printWeather,
} from './services/log.service.js';
import { getKeyValue, saveKeyValue } from './services/storage.service.js';

const { h, s, t } = getArgs(process.argv);

const saveToken = async token => {
  if (!token.length) {
    printError('Не передан токен');
    return;
  }
  try {
    await saveKeyValue('token', token);
    printSuccess('Токен сохранен');
  } catch (error) {
    printError(error.messages);
  }
};

const saveCity = async city => {
  if (!city.length) {
    printError('Не передан город');
    return;
  }
  try {
    await saveKeyValue('city', city);
    printSuccess('Город сохранен');
  } catch (error) {
    printError(error.messages);
  }
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue('kiev'));

    const weather = await getWeather(city.city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (e) {
    if (e?.response?.status === 404) {
      printError('Неверно указан город');
    } else if (e?.response?.status === 401) {
      printError('Неверно указан токен');
    } else {
      printError(e.message);
    }
  }
};

const initCLI = () => {
  if (h) {
    return printHelp(h);
  }
  if (s) {
    return saveCity(s);
  }
  if (t) {
    return saveToken(t);
  }

  return getForcast();
};

initCLI();
