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
	const [openError, setOpenError] = React.useState(false);
	const [openQtyAlert, setOpenQtyAlert] = React.useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!selectedSize) {
			return setOpenError(true);
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
			setOpenSuccess(true);
		} else if (
			productExistingInCart.orderQty < productExistingInCart.availableQty
		) {
			const newQty = (productExistingInCart.orderQty += 1);
			const sku = productExistingInCart.sku;
			increaseOrderQuantity(newQty, sku, dispatch);
			setOpenSuccess(true);
		} else {
			setOpenQtyAlert(true);
		}
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSuccess(false);
		setOpenError(false);
		setOpenQtyAlert(false);
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
			<Snackbar open={openError} autoHideDuration={2000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="info">
					Please choose a size
				</Alert>
			</Snackbar>
			<Snackbar
				open={openQtyAlert}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="info">
					Only {`${availableQty}`} available
				</Alert>
			</Snackbar>
		</div>
	);
};

export default AddToCartButton;
