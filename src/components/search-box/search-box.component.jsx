import React from 'react';
import "./search-box.styles.css";
export const SearchBox = ({ placeholder, handlerchange }) => 
    (<input
        type='search'
        placeholder={placeholder}
        className='search'
        onChange={handlerchange}
    />
    )


