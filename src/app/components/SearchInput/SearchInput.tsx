
import { useSearch } from '../../hooks';

// Styles
import './SearchInput.css';

export const SearchInput = () => {

  const { filter ,handleSearchChange } = useSearch();

  const { search } = filter;

  return (
    <div className="search">
        <img className="searchIcon" 
       src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png' 
       alt='Search Icon'
       />
        <input 
    type="search" 
    className='searchInput'
    placeholder='Search...'
    onChange={ handleSearchChange }
    value={ search }
    />
    </div>
   
  )
}
