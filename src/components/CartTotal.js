import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";

const CartTotal = () => {
	const { total, subtotal } = useContext(CartContext);

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
