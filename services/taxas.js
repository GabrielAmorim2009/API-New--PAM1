import * as config from './config.js';

export const getTAXAS = async (taxas) => {
    const url = `${config.url_api()}/taxas/v1/${taxas}`;
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
        console.error('Error fetching TAXAS data:', error);
        throw error;
    }
}