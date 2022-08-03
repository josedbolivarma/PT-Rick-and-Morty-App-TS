import axios from "axios";
import { useEffect, useState, useContext } from 'react';
import { RickMortyContext } from "../context";
import { URL } from "../helpers/helper";
import { APIResponse, Result } from "../interfaces/ApiResponse";

export const useFetch = () => {
    const [ characters, setCharacters ] = useState<Result[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState( false );

    const { search, pagination, handlePagination } = useContext( RickMortyContext );

    const getData = async () => {
        setIsLoading( true );
        setError( false );

        try {
            if ( search.length > 0 ) {
                const newData = await axios.get<APIResponse>(`${ URL }/?name=${ search }`);
                setCharacters( newData.data.results );
            } else {
                const newData = await axios.get<APIResponse>(`${ URL }/?page=${ pagination }`);
                setCharacters( newData.data.results );
            }
        } catch (error) {
            console.log( error );
            setError( true );
        }

        setIsLoading( false );
    }

    useEffect(() => {
        getData();
    }, [ search, pagination ])
    

    return {
        // Properties
        characters,
        isLoading,
        error,
        pagination,
        search,
        // Methods
        handlePagination
    }
}