import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { type } from "@testing-library/user-event/dist/type";

export const ShopContext = createContext();

//значение поумолчанию
const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };

  value.addToBacket = (item) => {
    dispatch({ type: "ADD_TO_BACKET", payload: item });
  };

  value.increase = (mainId) => {
    dispatch({ type: "INCREASE", payload: { id: mainId } });
  };

  value.decrease = (mainId) => {
    dispatch({ type: "DECREASE", payload: { id: mainId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };
  //   const value = {
  //     example: "hello form context",
  //   };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
