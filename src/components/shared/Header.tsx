import { useAppSelector } from "../../hooks/hook";

import cart from "../assets/cart-black.svg";
import logo from "../assets/logo.png";

export default function Example() {
  const cartState = useAppSelector((state) => state.cart.itemsInCart);

  const totalPrice = cartState.reduce((acc, item) => (acc += item.cost), 0);
  const totalQuantity = cartState.length;

  return (
    <header className="bg-white fixed w-screen flex justify-between  md:px-32 px-12 h-20 items-center border-b-2">
      <img className="h-3/4" src={logo} alt="" />
      <div className="flex gap-5 items-center">
      <p className="bg-slate-200 rounded-full px-2">{totalPrice} ₽</p>
        <div className="relative">
          <img className="fill-black w-4" src={cart} alt="" />
          <p className="bg-red-500 rounded-full px-1 text-white text-xs absolute -top-2 left-3">
            {totalQuantity}
          </p>
        </div>
      </div>
    </header>
  );
}
