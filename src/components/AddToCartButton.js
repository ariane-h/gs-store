import React, { useContext, useState } from "react";
import { Button, FormControl, Snackbar } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import MuiAlert from "@material-ui/lab/Alert";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { addToCart, increaseOrderQuantity } from "../actions/cartActions";

const AddToCartButton = (props) => {
	const { cart, dispatch } = useContext(CartContext);
	const { selectedSize, product, availableQty } = props;

	const [alerts, setAlerts] = useState({
		openSuccess: false,
		openError: false,
		openQtyAlert: false,
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!selectedSize) {
			return setAlerts({
				...alerts,
				openError: true,
			});
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
			setAlerts({
				...alerts,
				openSuccess: true,
			});
		} else if (
			productExistingInCart.orderQty < productExistingInCart.availableQty
		) {
			const newQty = (productExistingInCart.orderQty += 1);
			const sku = productExistingInCart.sku;
			increaseOrderQuantity(newQty, sku, dispatch);

			setAlerts({
				...alerts,
				openSuccess: true,
			});
		} else {
			setAlerts({
				...alerts,
				openQtyAlert: true,
			});
		}
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setAlerts({
			...alerts,
			openError: false,
			openSuccess: false,
			openQtyAlert: false,
		});
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
				open={alerts.openSuccess}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="success">
					Added to Cart
				</Alert>
			</Snackbar>
			<Snackbar
				open={alerts.openError}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="info">
					Please choose a size
				</Alert>
			</Snackbar>
			<Snackbar
				open={alerts.openQtyAlert}
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
