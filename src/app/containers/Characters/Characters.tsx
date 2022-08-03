import { useEffect, useState } from 'react';
import { Result } from '../../interfaces/ApiResponse';
import { CustomError, Loader, Modal} from '../../../ui';
import { Character } from '../../components';
import { useFetch } from '../../hooks';

import InfiniteScroll from 'react-infinite-scroll-component';

// Styles
import './Characters.css';

export const Characters = () => {

  const [ data, setData ] = useState<Result[]>([]);
  const [ noMore, setNoMore ] = useState( true );

  const { 
    characters, 
    isLoading, 
    error, 
    handlePagination, 
    pagination,
    search
  } = useFetch();

  const moreCharacters = () => {
    if ( characters.length === 0 || characters.length < 6 ) {
      setNoMore( false );
    }
    
    setData( (prev: any) => {
      return [ ...prev, ...characters ];
    });

    handlePagination( pagination + 1 );
  }

  useEffect( () => {
    if ( characters.length === 0 ) {
      setData( characters );
    }
    setNoMore( false );
  }, [ isLoading ]);

  
  return (
    <div className='characters'>

        {
          ( isLoading ) &&
          <Loader />
        }

        {
          ( !isLoading && error ) &&
          <CustomError />
        }

        {
          ( !isLoading && !error ) && 
                <InfiniteScroll
                dataLength={ data.length } //This is important field to render the next data
                next={ moreCharacters }
                hasMore={ noMore }
                loader={ <Loader /> }
                endMessage={ 
                  ( characters.length === 0 || search.length > 0 )?
                  <h2 className='center title-results'>FINAL RESULTS!</h2>
                  : <div className="center">
                    <button 
                      className='btn-load'
                      onClick={ moreCharacters }
                      >
                      LOAD CHARACTERS
                    </button> 
                  </div>
                }
    >
          <div className="characters_grid">
            {
              ( !search || search.length < 1 )
              ? 
              data.map(({ id, species, name, gender, image }, index ) => {
                if ( ( index + 1 ) % 8 === 0 ) {
                  return (
                  <Character 
                    key={ id }
                    id={ id }
                    species={ species }
                    name={ name }
                    gender={ gender }
                    image={ image }
                    />
                  )
                }
                return (
                  <Character 
                  key={ id }
                  id={ id }
                  species={ species }
                  name={ name }
                  gender={ gender }
                  image={ image }
                  />
                )
              }) 
              : characters.map(({ id, species, name, gender, image }, index ) => (
                <Character 
                id={ id }
                key={ id }
                species={ species }
                name={ name }
                gender={ gender }
                image={ image }
                />
              ))
                
            }
          </div>
    </InfiniteScroll>
            
            
        }

        {/* MODAL */}
        <Modal />
        {/* MODAL */}
    </div>
  )
}
