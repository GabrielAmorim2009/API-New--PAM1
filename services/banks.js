import * as config from './config.js';

export const getIBGE = async (bank) => {
    const url = `${config.url_api()}/bank/v1/${bank}?providers=dados-abertos-br,gov,wikipedia`;
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