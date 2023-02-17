import { beforeEach, describe, expect, it } from 'vitest'
import { getGistById } from '../utils/github-api.js'

describe('Testing Github Gists API', () => {

    const gistId1 = '799fe15f4b75706242b10d978e935067';

    // do this before each test
    beforeEach(() => {

    })

    it('Response status is successfull: 200', async () => {
            
            const getGithubGist = async (gistId) => await fetch('https://api.github.com/gists/' + gistId)
            const response = await getGithubGist(gistId1)
    
            expect(response.status).toBe(200)
    })

    /**
     * Check if the response is a JSON
     */
    it('The response is a JSON', async () => {

        const gist = await getGistById(gistId1)

        function isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return true;
            }
            return false;
        }
        expect(isJson(gist)).toBe(true)
  })

})