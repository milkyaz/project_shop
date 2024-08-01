function BasketItem(props) {
  const {
    mainId,
    displayName,
    price: { regularPrice },
    quantity,
  } = props;

  return (
    <li className="collection-item ">
      {displayName} x{quantity} = {regularPrice}
      <span class="secondary-content">
        <i class="material-icons">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
