
/**
 * Get a gist from Github API by gist ID
 * @param {*} gistId 
 * @returns 
 */
const getGistById = async (gistId) => {
    const response = await fetch('https://api.github.com/gists/' + gistId)
    return response.json()
}

module.exports = {
    getGistById
}