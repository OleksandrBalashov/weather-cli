import chalk from 'chalk';
import dedent from 'dedent-js';

const { bgRed, bgGreen, bgCyan, bgYellow } = chalk;

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

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.name}
		${icon}  ${res.weather[0].description}
		Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
		Влажность: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed}
		`
  );
};

export { printError, printSuccess, printHelp, printWeather };
