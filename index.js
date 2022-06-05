import fs from 'fs';
import chalk from 'chalk'
/*
  
*/

function extraiLinks(text) 
{
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;
    while((temp = regex.exec(text)) !== null) {
      arrayResults.push({ [temp[1]]: temp[2] })
    }
    return arrayResults;
}

function catchError(error)
{
    throw new Error(chalk.red(error.code, 'Não há arquivo no caminho'));
}

function getFile(pathFile)
{
    const enconding = 'utf-8';

    try {
        const text = await fs.promises.readFile(pathFile, encoding)
        console.log(extraiLinks(text));
      } catch(error) {
        trataErro(error);
      }
}

getFile('./arquivos/texto1.md');