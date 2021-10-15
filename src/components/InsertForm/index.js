import './style.scss';

function InsertForm() {
  return(
    <div className="insert-form">
      <div className="input-text">
        <input type="text" placeholder="Agrega el tema a revisar..."/>
      </div>
      <div className="add-button">
        <button>
          <img src="/assets/img/plus.svg" alt="Add"/> Add
        </button>
      </div>
    </div>
  );
}

export default InsertForm;
