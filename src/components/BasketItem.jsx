function BasketItem(props) {
  const {
    mainId,
    displayName,
    // price: {regularPrice},
    quantity,
  } = props;

  return (
    <li className="collection-item ">
      {displayName} x{quantity} = {props.regularPrice}
      <span className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
