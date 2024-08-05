import { useContext } from "react";
import { ShopContext } from "../context";
import { BasketItem } from "./BasketItem";

function BasketList() {
  //препдолагаем что order - массив
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.regularPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {/* //делаем проверку, если у нас есть длина у этого массива, то мы говорим
      orderd.map, обходим каждый элемент. И на каждый элемент возвращаем
      BasketItem, у котрого будет свой key равный объекту mainId и будет получать весь набор вещей */}
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}

      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
        <button className="secondary-content btn-small">Оформить</button>
      </li>

      <li className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </li>
    </ul>
  );
}

export { BasketList };
