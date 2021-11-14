import path from 'path';
import { writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';

const filePath = path.join(process.cwd(), 'weather-data.json');

const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist()) {
    const file = await readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value;

  await writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async () => {
  if (await isExist()) {
    return JSON.parse(await readFile(filePath));
  } else {
    return undefined;
  }
};

const isExist = async () => {
  try {
    return !!(await existsSync(filePath));
  } catch (error) {
    return false;
  }
};

export { saveKeyValue, getKeyValue };
