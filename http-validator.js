import fetch from 'node-fetch';

function errorHandler(error)
{
  throw new Error(error.message);
}

async function statusCheck(arrayURL)
{
    try {
        const arrayStatus = await Promise
          .all(arrayURL
            .map(async url => {
              const res = await fetch(url)
              return res.status;
        }))
        return arrayStatus;
      } catch(erro) {
        errorHandler(erro);
      } 
}


function arrayURLGenerator(arrayLinks)
{
    return arrayLinks.map(linkObject => Object.values(linkObject).join());
}

async function urlValidator(arrayLinks)
{
    const links = arrayURLGenerator(arrayLinks);
    const statusLinks = await statusCheck(links);
    const results = arrayLinks.map((object, index) => ({
        ...object,
        status: statusLinks[index]
      }))
      return results;
}

export default urlValidator;

