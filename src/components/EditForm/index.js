import {useEffect, useReducer} from "react";

import './style.scss';

const initialState = {id: 0, title: ''};

function reducer(state, action) {
  switch (action.type) {
    case 'edit':
      return {
        id: action.id,
        title: action.title
      };
    default:
      throw new Error();
  }
}

function EditForm({item, onEdit, onClose}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = event => {
    dispatch({
      type: 'edit',
      id: item.id,
      title: event.target.value
    });
  };

  useEffect(() => {
    dispatch({
      type: 'edit',
      id: item.id,
      title: item.title
    });
  }, []);

  return (
    <div className="modal">
      <div className="close">
        <button onClick={() => onClose()}>X</button>
      </div>
      <div className="edit-form">
        <div className="input-text">
          <label htmlFor="title">Tema</label>
          <input id="title" value={state.title} onChange={e => handleChange(e)}/>
        </div>
        <div className="action-button">
          <button onClick={() => onEdit(state)}>Actualizar</button>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
