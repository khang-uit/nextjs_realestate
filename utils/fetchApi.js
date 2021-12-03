import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'ab70b9184dmsh5dcc37c07b613b4p1da10bjsn08a52f0be4f8'
        }
    })

    return data;
}