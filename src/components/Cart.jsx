function Cart(props) {
  return (
    <div className="cart purple darken-4 white-text">
      <i className="material-icons ">shopping_basket</i>
      {props.length ? <span>{props.length}</span> : null}
    </div>
  );
  //   const { quantity = 0 } = props;
  //   return (
  //     <div className="cart  purple darken-4 white-text">
  //       <i className="material-icons">shopping_basket</i>
  //       {quantity ? <span className="cart-quantity">{quantity}</span> : null}
  //     </div>
  //   );
}

export { Cart };
