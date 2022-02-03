import axios from 'axios';

export const BASE_URL = 'https://restcountries.com/v2';

export const fetchCountiesData = async ({ queryKey }) => {

    const [, service, fields] = queryKey;

    let endpoint = `${BASE_URL}/${service}`;

    let condition = null;

    if (Array.isArray(fields)) {
        condition = '?fields=' + fields.join(',');
    } else {
        condition = `/${fields}`;
    }

    endpoint = condition ? `${endpoint}${condition}` : endpoint;

    try {
        const api = new URL(endpoint);

        const res = await axios.get(api);

        return res.data;
    } catch (err) {
        console.log(err);

        return [];
    }
};