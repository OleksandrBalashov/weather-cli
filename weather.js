#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

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

const initCLI = () => {
  if (h) {
    printHelp(h);
  }
  if (s) {
    // save town
  }
  if (t) {
    return saveToken(t);
  }

  // return weather;
  getWeather('kiev');
};

initCLI();
