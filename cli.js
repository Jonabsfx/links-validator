import chalk from 'chalk';
import getFile from './index.js';

const path = process.argv;

async function textProcess(pathFile) {
  const result = await getFile(pathFile[2]);
  console.log(chalk.yellow('lista de links'), result);
}

textProcess(path);