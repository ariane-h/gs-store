import React, { useContext } from "react";
import { Button, FormControl, Snackbar } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import MuiAlert from "@material-ui/lab/Alert";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { addToCart, increaseOrderQuantity } from "../actions/cartActions";

const AddToCartButton = (props) => {
	const { cart, dispatch } = useContext(CartContext);
	const { selectedSize, product, availableQty } = props;
	const [openSuccess, setOpenSuccess] = React.useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!selectedSize) {
			return alert("please choose a size");
		}

		const orderItem = {
			id: product.id,
			sku: selectedSize.sku,
			orderQty: 1,
			imageUrl: product.imageUrl,
			size: selectedSize.title,
			price: product.price,
			title: product.title,
			availableQty: availableQty,
		};

		const productExistingInCart = cart.find(
			(product) => product.sku === selectedSize.sku
		);

		if (!productExistingInCart) {
			addToCart(orderItem, dispatch);
		} else {
			const newQty = (productExistingInCart.orderQty += 1);
			const sku = productExistingInCart.sku;
			increaseOrderQuantity(newQty, sku, dispatch);
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
				<Button
					variant="contained"
					type="submit"
					color="primary"
					endIcon={<ShoppingBasketIcon />}
					size="large"
				>
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
