import {useState, useEffect} from "react";

import './style.scss';

function InsertForm({onChange, onClick}) {
  const [name, setName] = useState('');

  useEffect(() => {
    onChange(name)
  });

  const handleClick = () => {
    onClick();
    setName('');
  };

  return (
    <div className="insert-form">
      <div className="input-text">
        <input type="text" placeholder="Agrega el tema a revisar..." value={name}
               onChange={e => setName(e.target.value)}/>
      </div>
      <div className="add-button">
        <button onClick={() => handleClick()}>
          <img src="/assets/img/plus.svg" alt="Add"/> Add
        </button>
      </div>
    </div>
  );
}

export default InsertForm;
