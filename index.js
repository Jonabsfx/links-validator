import fs from 'fs'
import chalk from 'chalk'


function linkExtractor(text) 
{
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;
    while((temp = regex.exec(text)) !== null) {
      arrayResults.push({ [temp[1]]: temp[2] })
    }
    return arrayResults.length === 0 ? 'ERROR: there\'s no link' : arrayResults;
}

function catchError(error)
{
    throw new Error(chalk.red(error.code, 'ERROR: no file'));
}

async function getFile(pathFile)
{
    const enconding = 'utf-8';

    try {
        const text = await fs.promises.readFile(pathFile, enconding)
        return linkExtractor(text);
      } catch(error) {
        catchError(error);  
      }
}

export default getFile;