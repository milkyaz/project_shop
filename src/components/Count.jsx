const Count = (props) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={props.quantity}
        />
      </div>
      <div className="count__controls">
        <button
          onClick={() => {
            props.increase(props.mainId);
          }}
          type="button"
          className="material-icons"
        >
          arrow_drop_up
        </button>
        <button
          onClick={() => {
            props.decrease(props.mainId);
          }}
          type="button"
          className="material-icons"
        >
          arrow_drop_down
        </button>
      </div>
    </div>
  );
};

export { Count };
