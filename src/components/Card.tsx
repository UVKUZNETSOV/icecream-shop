import { useState, useEffect } from "react";
import { CardProp } from "../types/types";

import cart from "./assets/cart-white.svg";

import { useAppDispatch, useAppSelector } from "../hooks/hook"
import { addItemInCart, removeItemFromCart } from "../store/cart/cartSlice"

const Card = (props: CardProp) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const itemsState = useAppSelector(state => state.cart.itemsInCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("key") || "[]");
    const itemExists = localState.some((item: CardProp) => item.itemKey === props.itemKey);

    if (itemExists) {
      setIsClicked(true);
    }
  }, [props.itemKey]);

  const addItem = () => {
    setIsClicked(true);
    dispatch(addItemInCart(props));
    const updatedItems = [...itemsState, props];
    localStorage.setItem("key", JSON.stringify(updatedItems));
  };

  const deleteItem = () => {
    setIsClicked(false);
    dispatch(removeItemFromCart(props.itemKey));

    const updatedItems = itemsState.filter(item => item.itemKey !== props.itemKey);
    localStorage.setItem("key", JSON.stringify(updatedItems));
  };

  return (
    <li
      key={props.itemKey}
      className="w-72 h-96 flex flex-col rounded-xl border p-3 hover:shadow-md cursor-pointer transition-all justify-between bg-white"
    >
      <div className="flex flex-col gap-4">
        <img className="w-4/5" src={props.image} />
        <h1 className="text-slate-700 leading-5">{props.title}</h1>
      </div>
      <div className="flex justify-between items-center">
        {!isClicked ? (
          <button onClick={addItem} className="transition-all">
            <div className="bg-black hover:bg-red-500 text-white flex items-center px-3 py-2 gap-2 rounded-lg transition-all">
              <img className="w-5 fill-white" src={cart} alt="" />
              <p>В корзину</p>
            </div>
          </button>
        ) : (
          <button onClick={deleteItem} className="transition-all">
            <div className="bg-red-500 text-white flex items-center px-3 py-2 gap-2 rounded-lg transition-all">
              <p>Убрать из корзины</p>
            </div>
          </button>
        )}
        <p className="text-xl font-semibold px-2">{props.cost} ₽</p>
      </div>
    </li>
  );
};

export default Card;