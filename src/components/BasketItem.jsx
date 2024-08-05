import { Count } from "./Count";
import { useContext } from "react";
import { ShopContext } from "../context";
function BasketItem(props) {
  const {
    mainId,
    displayName,
    // price: {regularPrice},
    quantity,
    removeFromBasket = Function.prototype,
    increase = Function.prototype,
    decrease = Function.prototype,
  } = props;

  const { example } = useContext(ShopContext);
  console.log(example);

  return (
    <li className="collection-item ">
      <div className="displayName__quantity__text">{displayName} </div>
      <Count
        decrease={decrease}
        increase={increase}
        quantity={quantity}
        mainId={mainId}
      />{" "}
      {props.regularPrice * quantity} руб.
      <span
        className="secondary-content"
        onClick={() => removeFromBasket(mainId)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
