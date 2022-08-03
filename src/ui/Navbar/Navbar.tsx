import { SearchInput } from '../../app/components';

// Styles
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <SearchInput />
      </div>
    </div>
  )
}
