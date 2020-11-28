import React from 'react';

import './search-box.style.css';

// func component just gets some props and returns html

export const SearchBox = ({placeholder, handleChange}) => (
<input
      className='search'
      type='search'
      placeholder= {placeholder }
      onChange={handleChange}
      />
);
