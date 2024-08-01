function BasketItem(props) {
  const {
    mainId,
    displayName,
    price: { regularPrice },
    quantity,
  } = props;

  return (
    <li className="collection-item ">
      {displayName} x{quantity} =
      <span class="secondary-content">
        <i class="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
