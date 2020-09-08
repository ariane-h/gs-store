import React, { useContext } from "react";
import { Button, FormControl, Snackbar } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import MuiAlert from "@material-ui/lab/Alert";

const AddToCartButton = (props) => {
	const { cart, dispatch } = useContext(CartContext);
	const { selectedSize, product, availableQty } = props;
	const [openSuccess, setOpenSuccess] = React.useState(false);

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

		setOpenSuccess(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSuccess(false);
	};

	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}

	return (
		<div>
			<FormControl variant="outlined" onClick={handleSubmit}>
				<Button variant="contained" type="submit">
					Add to cart
				</Button>
			</FormControl>

			<Snackbar
				open={openSuccess}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="success">
					Added to Cart
				</Alert>
			</Snackbar>
		</div>
	);
};

export default AddToCartButton;
