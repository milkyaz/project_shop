import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Preloader } from "./Preloader";
import { GoodsLits } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";

function Shop() {
  //список товаров
  const [goods, setGoods] = useState([]);
  //состояние загрузки
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  //сценарий, когда товар добавляется впервый раз
  const addToBacket = (item) => {
    //нужна проверка, что увеличивать quantity
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    ); //если вдруг айди найдётся, то мы получим индекс этого массива пример => [{id: 1}, {id: 2}]
    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      //функция setOrder должна вернуть нам массив и она у нас возвращает список, который уже есть в массиве и добавляет туда новый объект
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  //удаление товара из корзины
  const removeFromBasket = (itemId) => {
    //должны обойти наш order и отфильтровать всё лишнее(один товар), будет какой то элемент и
    //el.id не должен быть равен itemId(тому индификатору, который мы получим из вне)
    //у того el.id у которого есть, будет значение false и мы его не добавим в новый наш заказ
    //после чего
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  //счетчик товаров
  const increase = (mainId) => {
    console.log("Increase", mainId);

  };

  //функция, которая управляет состоянием показа корзины
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  //создадим useEffect, нужно выполнить операцию один раз. Поэтому массив зависимости будет пустым
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop.slice(0, 6));
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsLits goods={goods} addToBasket={addToBacket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          increase={increase}
        />
      )}
    </main>
  );
}

export { Shop };
