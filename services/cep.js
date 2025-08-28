import * as config from './config.js';

export const getCEP = async (cep) => {
    const url = `${config.url_api()}/cep/v1/${cep}`;
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
        console.error('Error fetching CEP data:', error);
        throw error;
    }
}