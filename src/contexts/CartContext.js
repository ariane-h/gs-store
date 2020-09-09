import React, { createContext, useReducer, useEffect, useState } from "react";
import { cartReducer } from "../reducers/CartReducer";

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cart, dispatch] = useReducer(cartReducer, [], () => {
		const localData = localStorage.getItem("cart");
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const [subtotal, setSubtotal] = useState(0);
	const deliveryFee = 0;
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const calculateSubTotal = async () => {
			let subtotalResult = 0;
			await cart.map((product) => {
				return (subtotalResult += product.price * product.orderQty);
			});
			setSubtotal(subtotalResult);
			return subtotal;
		};

		const calculateTotal = async () => {
			let subtotal = await calculateSubTotal();
			let totalResult = subtotal + deliveryFee;
			setTotal(totalResult);
			return total;
		};

		calculateSubTotal();
		calculateTotal();
	}, [cart, subtotal, total]);

	return (
		<CartContext.Provider value={{ cart, dispatch, total, subtotal }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
