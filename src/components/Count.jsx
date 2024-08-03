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
          className="count__up"
        >
          +
        </button>
        <button type="button" className="count__down">
          -
        </button>
      </div>
    </div>
  );
};

export { Count };
