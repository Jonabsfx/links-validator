import getFile from '../index';

const arrayResult = [
    {
      FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
  ]
  
  describe('getFile::', () => {
    it('it should be a function', () => {
      expect(typeof getFile).toBe('function');
    })

    it('it should return an array with results', async () => {
      const result = await getFile('./test/arquivos/texto1.md') 
      expect(result).toEqual(arrayResult);
    })

    it('it should return message "there are no links"', async() =>{
        const result = await getFile('./test/arquivos/texto1-sem-links.md')
        expect(result).toBe('ERROR: there\'s no link');
    })
    it('it should throw a missing file error', () => {
        async function catchError()
        {
            await getFile('./arquivos/arquivos')
            expect(catchError).toThrowError(/there are no files in path/)
        }
    })
  })