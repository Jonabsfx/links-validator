import chalk from 'chalk';
import getFile from './index.js';
import urlValidator from './http-validator.js';

const path = process.argv;

async function textProcess(pathFile) {
  const result = await getFile(pathFile[2]);
  if (path[3] === 'validar') {
    console.log(chalk.yellow('links validados'), await urlValidator(resulte));
  } else {
    console.log(chalk.yellow('lista de links'), result);
  }
}

textProcess(path);