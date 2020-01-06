import './search-box.styles.css';

import React from "react";

const SearchBox = ({placeholder, handleChange, ...props}) => {
return <input
className='search'
onChange={handleChange}
type="search"
placeholder={placeholder}
/>;
};

export default SearchBox;