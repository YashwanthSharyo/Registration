
import './Navbar.css';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// eslint-disable-next-line react/prop-types
function Navbar({ onAddProfile }) {
  return (
    <div className="navbar">
      <div className="navbar-search">
        <InputBase
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          startAdornment={<SearchIcon />}
          className="navbar-search-input"
        />
      </div>

      
      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#about-us">About Us</a>
        <a href="#find">Find</a>
        <a href="#help">Help</a>
      </div>

      <div className="navbar-profile">
        
        <IconButton onClick={onAddProfile} color="primary">
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
