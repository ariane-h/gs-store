import React, { useContext } from "react";
import { Button, FormControl } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";

const AddToCartButton = (props) => {
	const { cart, dispatch } = useContext(CartContext);
	const { selectedSize, product, availableQty } = props;

	console.log(availableQty);

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
					imageUrl: product.imageUrl,
					size: selectedSize.title,
					price: product.price,
					title: product.title,
					availableQty: availableQty,
				},
			});
		} else {
			dispatch({
				type: "INCREASE_QTY",
				sku: productInCart.sku,
			});
		}
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
