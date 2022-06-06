import chalk from 'chalk';
import getFile from './index.js';
import urlValidator from './http-validator.js';

const path = process.argv;

async function textProcess(pathFile) {
  const result = await getFile(pathFile[2]);
  if (path[3] === 'validate') {
    console.log(chalk.yellow('validated links'), await urlValidator(result));
  } else {
    console.log(chalk.yellow('list of links'), result);
  }
}

textProcess(path);