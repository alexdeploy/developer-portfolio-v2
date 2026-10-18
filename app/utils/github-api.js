/**
 * Get a gist from Github API by gist ID
 * @param {string} gistId
 * @returns {Promise<object>}
 */
export const getGistById = async (gistId) => {
  const response = await fetch('https://api.github.com/gists/' + gistId)
  return response.json()
}
