import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Preloader } from "./Preloader";
import { GoodsLits } from "./GoodsList";
import { Cart } from "./Cart";

function Shop() {
  //список товаров
  const [goods, setGoods] = useState([]);
  //состояние загрузки
  const [loading, setLoading] = useState(true);

  //создадим useEffect, нужно выполнить операцию один раз. Поэтому массив зависимости будет пустым
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop.slice(0, 24));
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart length={goods.length} />
      {loading ? <Preloader /> : <GoodsLits goods={goods} />}
    </main>
  );
}

export { Shop };
