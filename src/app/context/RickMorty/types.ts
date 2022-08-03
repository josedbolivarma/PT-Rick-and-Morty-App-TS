export type RickMortyAction = 
{ 
    type: 'searchByName', 
    payload: string 
} | {
    type: 'changePagination',
    payload: number
} | {
    type: 'selectModal',
    payload: number
} | {
    type: 'openModal',
    payload: boolean
}




