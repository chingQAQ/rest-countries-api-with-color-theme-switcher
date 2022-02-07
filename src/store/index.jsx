import { useMemo } from 'react';
import { useQuery } from 'react-query';
import API from '@/apis';

const SERVICE = 'all'; 

const FIELDS = [
    'flags',
    'name',
    'population',
    'region',
    'capital',
    'nativeName',
    'languages',
    'topLevelDomain',
    'subregion',
    'currencies'
];

export function useStore() {
    const { isLoading, isSuccess, isError, error, data } = useQuery(
        ['countriesData', SERVICE, FIELDS],
        API.fetchCountiesData,
        { staleTime: 5 * 60 * 1000 }
    );

    const store = useMemo(() => {
        const ret = isError ? error.message : data;

        return ret || [];

    }, [isLoading, isSuccess]);
    
    return {
        data: store,
        getDataState: () => ({
            isLoading,
            isSuccess,
            isError,   
        }),
        getCountryByName: async (name) => {

            const memoryCountry = store.find(i => i.name === name);

            return memoryCountry || await API.getCountryByName(name).then(r => r[0]);
        }
    };
}

export default useStore;
