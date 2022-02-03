import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchCountiesData } from '@/apis';

const SERVICE = 'all'; 

const FIELDS = [
    'flags',
    'name',
    'population',
    'region',
    'capital'
];

export function useStore() {

    const { isLoading, isSuccess, isError, error, data } = useQuery(
        ['countriesData', SERVICE, FIELDS],
        fetchCountiesData,
        { staleTime: 5 * 60 * 1000 }
    );

    const store = useMemo(() => {

        const ret = isError ? error.message : data;

        return {
            isLoading,
            isSuccess,
            isError,
            data: ret || []
        };

    }, [isLoading, isSuccess]);
    
    return store;
}

export default useStore;
