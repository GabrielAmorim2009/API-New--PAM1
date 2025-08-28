import * as config from './config.js';

export const getIBGE = async (ibge) => {
    const url = `${config.url_api()}/ddd/v1/${ibge}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            return;
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching DDD data:', error);
        throw error;
    }
}