import React from "react";
import { AppContext } from "../App";

export const useCart = () => {
    const { itemsCart, setItemsCart } = React.useContext(AppContext);
    const totalPrice = itemsCart.reduce((sum, obj) => sum + Number(obj.price), 0);
    return {itemsCart, setItemsCart, totalPrice};
}