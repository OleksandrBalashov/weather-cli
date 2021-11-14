import chalk from 'chalk';
import dedent from 'dedent-js';

const { bgRed, bgGreen, bgCyan } = chalk;

const printError = error => {
  console.log(bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = message => {
  console.log(bgGreen(' Success ') + ' ' + message);
};

const printHelp = () => {
  console.log(
    dedent`${bgCyan(' HELP ')}
		без параметров - вывод погоды
		-s [CITY] для установки погоды
		-h для вывода помощи
		-t [API_KEY] для сохраниения токена`
  );
};

export { printError, printSuccess, printHelp };
