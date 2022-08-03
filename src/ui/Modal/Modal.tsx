
import { useState, useContext, useEffect } from 'react';
import { RickMortyContext } from '../../app/context';
import { URL } from '../../app/helpers/helper';
import { Result } from '../../app/interfaces/ApiResponse';

import axios from 'axios';

// Styles
import './Modal.css';


export const Modal = () => {

  const { modal, openModal, setOpenModal } = useContext( RickMortyContext );

  const [ data, setData ] = useState<Result>();

  const getOneData = async () => {
    const { data } = await axios.get( `${ URL }/${ modal }`);
    setData( data );
  }

  const closeModal = () => {
    setOpenModal( false );
  }

  useEffect( () => {
    if ( modal ) {
      getOneData();
    }
  }, [ modal ]);

  return (
    <div className={ openModal? 'modal' : 'none' }>
    <div className='modal_container'>
        <div className='modal_content'>
        <span onClick={ closeModal }>
            <img
            className='modal_close'
            src="https://static.thenounproject.com/png/6447-200.png" 
            alt="Close Modal" />
        </span>

        <h2 className='modal_title'>MARVUT CHARACTER</h2>
        <img className='modal_image' src={ data?.image } alt='Modal Edit'/>
        
        <h2 className='modal_subtitle'>{ data?.name }</h2>
        <h2 className='modal_subtitle'>{ data?.species }</h2>

    </div>
</div>
   
</div>
  )
}
