import React, { useContext } from "react";
import { Button, FormControl } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";

const AddToCartButton = (props) => {
	const { cart, dispatch } = useContext(CartContext);
	const { selectedSize, product } = props;

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!selectedSize) {
			return alert("please choose a size");
		}

		// check if item in cart
		const productInCart = cart.find(
			(product) => product.sku === selectedSize.sku
		);

		//if not in cart, add to cart
		if (!productInCart) {
			dispatch({
				type: "ADD_TO_CART",
				cartItem: {
					id: product.id,
					sku: selectedSize.sku,
					orderQty: 1,
				},
			});
		} else {
			dispatch({
				type: "INCREASE_QTY",
				sku: productInCart.sku,
			});
		}

		// else increase quantity
	};

	return (
		<div>
			<FormControl variant="outlined" onClick={handleSubmit}>
				<Button variant="contained" type="submit">
					Add to cart
				</Button>
			</FormControl>
		</div>
	);
};

export default AddToCartButton;
