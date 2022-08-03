import { RickMortyAction } from './types';

export const rickMortyReducer = ( state: any , action: RickMortyAction )  => {
    switch ( action.type ) {
        case 'searchByName':
            return {
                ...state,
                search: action.payload.toLocaleLowerCase()
            };
        case 'changePagination':
            return {
                 ...state,
                pagination: action.payload
            };
        case 'selectModal':
            return {
                 ...state,
                modal: action.payload
        };
        case 'openModal':
            return {
                 ...state,
                openModal: action.payload
        };

        default:
            return state;
    }
}