import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

const CartTotal = ({ cartItems }) => {
	const [subtotal, setSubtotal] = useState(0);
	const deliveryFee = 0;
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const calculateSubTotal = async () => {
			let subtotalResult = 0;
			await cartItems.map((product) => {
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
	}, [cartItems, subtotal, total]);

	return (
		<>
			<Typography variant="body1" gutterBottom>
				Subtotal: £{`${subtotal.toFixed(2)}`}
			</Typography>
			<Typography variant="body1" gutterBottom>
				Delivery: FREE
			</Typography>

			<Typography variant="h6" gutterBottom>
				Total: £{`${total.toFixed(2)}`}
			</Typography>
		</>
	);
};

export default CartTotal;
