const BASE_URL = 'https://api.rawg.io/api/';
const KEY = 'key=2e9a5f65615741ebbd2def83f8bcf03a&';
const GAMES_PARAMS = 'games';
const PLATFORMS_PARAMS = 'platforms/lists/parents?';
export const API_URL = {
    RawgApi: {
        urlGames: (queryParams = '') =>
        `${BASE_URL}${GAMES_PARAMS}?${KEY}${queryParams}`,
        urlSpecificGame: (queryParams = '') =>
        `${BASE_URL}${GAMES_PARAMS}/${queryParams}?${KEY}`,
        urlPlatforms: (queryParams = '') =>
        `${BASE_URL}${PLATFORMS_PARAMS}${KEY}${queryParams}`,
        config: {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        },
    },
};