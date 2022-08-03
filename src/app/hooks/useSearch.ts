import { useContext, useState } from 'react';
import { RickMortyContext } from '../context';

interface Props {
    search: string;
}

export const useSearch = () => {

    const [ filter, setFilter] = useState<Props>({
        search: ''
    });

    const { handleSearch } = useContext( RickMortyContext );

    const handleSearchChange = ( e: any ) => {
        const value = e.target.value;

        setFilter( ( prev: Props ) => {
            return {
                search: value
            }
        } );

        handleSearch( value );
    }; 

    return {
        // Properties
        filter,
        // Methods
        handleSearchChange,
    }

}