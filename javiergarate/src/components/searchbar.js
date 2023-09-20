import React, { useState } from 'react';
import '../styles/searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearchClick = () => {
    onSearch({
      term: searchTerm,
      category: searchCategory,
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
    });
  };

  return (
    <div className="search-bar-container">
      <input
        className="input-field"
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Buscar por categoría..."
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
      />
      <input
        className="input-field"
        type="number"
        placeholder="Precio mínimo"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        className="input-field"
        type="number"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;