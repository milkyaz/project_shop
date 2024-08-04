import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Preloader } from "./Preloader";
import { GoodsLits } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
  //список товаров
  const [goods, setGoods] = useState([]);
  //состояние загрузки
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

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
    setAlertName(item.displayName);
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
    setOrder((order) => {
      return order.map((el) => {
        if (el.mainId === mainId) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        }
        return el;
      });
    });
  };

  const decrease = (mainId) => {
    console.log("decrease", mainId);
    setOrder((order) => {
      return order.map((el) => {
        if (el.mainId === mainId) {
          return {
            ...el,
            quantity: el.quantity - 1 > 1 ? --el.quantity : 1,
          };
        }
        return el;
      });
    });
  };

  //функция, которая управляет состоянием показа корзины
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  //функция будет восстанавливать setAlertName на пустую строку
  const closeAlert = () => {
    setAlertName("");
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
        data.shop && setGoods(data.shop.slice(0, 12));
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
          key={order.mainId}
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          increase={increase}
          decrease={decrease}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
