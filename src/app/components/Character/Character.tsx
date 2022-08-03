import { useContext } from 'react';
import { RickMortyContext } from '../../context';
import { useNearScreen } from '../../hooks';

// Styles
import './Character.css';

interface Props {
  name: string;
  species: string;
  gender: string;
  image: string;
  id: number;
}

export const Character = ({ name, species, gender, image, id }: Props ) => {

  const { handleModal, setOpenModal } = useContext( RickMortyContext );

  const { show, element } = useNearScreen({
    root: null,
    threshold: 0.60
  });

  const sendDataModal = () => {
    handleModal( id );
    setOpenModal( true );
  }
  
  return (
    <div className='character-elementRef animate__animated animate__fadeIn' ref={ element } >
      {
        show &&  
        <>
        <div className='character'>
        <img 
        src={ image }
        alt={ name } 
        onClick={ sendDataModal }
        className='character_image'
        />
          <div className="character_content">
             <h2 className='character_title'>{ name }</h2>
             <h2 className='character_title'>{ species }</h2>
             <h2 className='character_title'>{ gender }</h2>
          </div>
      </div>
        </>
      }
    </div>
  )
}
