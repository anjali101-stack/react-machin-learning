import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Cartcontext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const StoredCart = localStorage.getItem('cartItems');
        if(StoredCart){
            setCartItems(JSON.parse(StoredCart));
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const AddToCart = (product) => {
        const AlreadyInCart = cartItems.find((item) => item.id == product.id)

        if(AlreadyInCart){
            toast.info("already in cart")
            return;
        }

        setCartItems((prev)=> [...prev , product])
        toast.success("added")


    };

    const RemoveFromcart = (product) => {
        console.log("called")
        setCartItems((prev) => prev.filter((item) => item.id !== product.id));
        toast.info("Item removed from cart");
    };

    return (
        <Cartcontext.Provider value={{ AddToCart, RemoveFromcart, cartItems }}>
            {children}
        </Cartcontext.Provider>
    );
};

export const useCart = () => useContext(Cartcontext);
