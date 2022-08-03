import { createContext } from "react";

interface RickMortyContextProps {
    search: string;
    pagination: number;
    modal: number;
    openModal: boolean;
    handleSearch: ( e: string ) => void;
    handlePagination: ( n: number ) => void;
    handleModal: ( n: number ) => void;
    setOpenModal: ( m: boolean ) => void;
}

export const RickMortyContext = createContext({} as RickMortyContextProps );