import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v2';

const setEndpoint = (url = null, ...path) => `${url}/${path.join('/')}`;

const fetchCountiesData = async ({ queryKey }) => {

    const [, service, fields] = queryKey;

    let endpoint = setEndpoint(BASE_URL, service);

    let condition = null;

    if (Array.isArray(fields)) {
        condition = '?fields=' + fields.join(',');
    } else {
        condition = `/${fields}`;
    }

    endpoint = endpoint + condition;

    try {
        const api = new URL(endpoint);

        const res = await axios.get(api);

        return res.data;
    } catch (err) {
        console.log(err);

        return [];
    }
};

const getCountryByName = async (name) => {

    let endpoint = setEndpoint(BASE_URL, 'name', name);

    try {
        const api = new URL(endpoint);

        const res = await axios.get(api);

        return res.data;
    } catch (err) {
        console.log(err);

        return [];
    }

};

export default {
    fetchCountiesData,
    getCountryByName
};