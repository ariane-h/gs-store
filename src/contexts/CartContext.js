import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		const cartContents = [];
		cartContents.push(product);
		setCart(cartContents);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
