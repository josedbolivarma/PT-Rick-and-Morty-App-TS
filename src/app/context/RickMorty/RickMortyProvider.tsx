import { useReducer } from "react";
import { RickMortyContext, rickMortyReducer } from "../";

export interface FilterState {
  search?: '',
}

const INITIAL_STATE = {
  search: '',
  pagination: 1,
  modal: 0,
  openModal: false
}

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export const RickMortyProvider = ({ children }: Props) => {
  
  const [state, dispatch] = useReducer( rickMortyReducer, INITIAL_STATE );

  const handleSearch = ( e: string ) => {
    dispatch({
      type: 'searchByName',
      payload: e
    })
  }

  const handlePagination = ( n: number ) => {
    dispatch({
        type: 'changePagination',
        payload: n
      })
  } 
  
  const handleModal = ( n: number ) => {
    dispatch({
        type: 'selectModal',
        payload: n
      })
  } 

  const setOpenModal = ( m: boolean ) => {
    dispatch({
        type: 'openModal',
        payload: m
      })
  } 

  return (
    <RickMortyContext.Provider value={{
      ...state,
      handleSearch,
      handlePagination,
      handleModal,
      setOpenModal
    }}>
      {
        children
      }
    </RickMortyContext.Provider>
  )
}