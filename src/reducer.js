export function reducer(state, { type, playload }) {
  switch (type) {
    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case "DECREASE":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === playload.id) {
            return {
              ...el,
              quantity: el.quantity - 1 > 1 ? --el.quantity : 1,
            };
          }
          return el;
        }),
      };
    case "INCREASE":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === playload.id) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          }
          return el;
        }),
      };
    case "ADD_TO_BACKET": {
      //нужна проверка, что увеличивать quantity
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === playload.mainId
      ); //если вдруг айди найдётся, то мы получим индекс этого массива пример => [{id: 1}, {id: 2}]

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = { ...playload, quantity: 1 };
        //функция setOrder должна вернуть нам массив и она у нас возвращает список, который уже есть в массиве и добавляет туда новый объект
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: playload.displayName,
      };
    }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== playload.id),
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    default:
      return state;
  }
}
