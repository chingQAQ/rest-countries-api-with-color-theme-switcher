import axios from 'axios';
import { join } from '@/utils';

const BASE_URL = 'https://restcountries.com/v2';

const format = join(',');

const setEndpoint = (url = null, ...path) => `${url}/${path.join('/')}`;

const fetchCountiesData = async ({ queryKey }) => {

    const [, service, fields] = queryKey;

    let endpoint = setEndpoint(BASE_URL, service);

    try {
        const api = new URL(endpoint);

        const params = new URLSearchParams();

        if (Array.isArray(fields)) {
            params.append('fields', format(fields));
            api.search = params.toString();
        }

        const res = await axios.get(api);

        return res.data;
    } catch (err) { return []; }
};

const getCountryByName = async (name) => {

    let endpoint = setEndpoint(BASE_URL, 'name', name);

    try {
        const api = new URL(endpoint);

        const res = await axios.get(api);

        return res.data;
    } catch (err) { return []; }
};

export default {
    fetchCountiesData,
    getCountryByName
};