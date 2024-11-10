import { createContext } from "react";

const CartContext = createContext(0);
const FavContext = createContext(0);



const AddedCartContext = createContext([]);
const AddedWishContext = createContext([]);


export {CartContext, FavContext, AddedCartContext, AddedWishContext}