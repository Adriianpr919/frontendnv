import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = ({ value, changeInput }) => {
  return (
    <div className='f-filterDiv'>
      <div>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" style={{ fontSize: "15px" }}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-plus" /> B&#250;scar. :*
        </label>
        <div className="relative">
          <input type="search" value={value} onChange={changeInput} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba Palabra Clave. :*" style={{ fontSize: "15px" }} required />
        </div>
      </div>
    </div>
  );
};

export default Search;