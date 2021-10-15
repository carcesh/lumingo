import {useEffect, useState} from "react";

import './style.scss';

function SearchForm({onChange, onClick}) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onChange(query)
  });

  const handleClick = () => {
    onClick();
  };

  return (
    <div className="search-form">
      <div className="input-text">
        <input type="text" placeholder="Tema a buscar..." value={query}
               onChange={e => setQuery(e.target.value)}/>
      </div>
      <div className="search-button">
        <button onClick={() => handleClick()}>Buscar</button>
      </div>
    </div>
  );
}

export default SearchForm;
