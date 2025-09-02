import * as config from './config.js';

export const getBANKS = async (banks) => {
    const url = `${config.url_api()}/banks/v1/${banks}`;
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
        console.error('Error fetching BANKS data:', error);
        throw error;
    }
}