import React, { useState } from "react";
import {
	Typography,
	Grid,
	Box,
	IconButton,
	makeStyles,
	Snackbar,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CartProductImg from "./CartProductImg";
import {
	increaseOrderQuantity,
	decreaseOrderQuantity,
	removeFromCart,
} from "../actions/cartActions";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";

const CartProductList = ({ cart, dispatch }) => {
	const [openQtyAlert, setOpenQtyAlert] = useState(false);
	const [availableStock, setAvailableStock] = useState("");

	const handleIncreaseQty = (sku, orderQty, availableQty) => {
		if (orderQty < availableQty) {
			const newQty = orderQty + 1;
			increaseOrderQuantity(newQty, sku, dispatch);
		} else {
			setAvailableStock(availableQty);
			return setOpenQtyAlert(true);
		}
	};

	const handleDecreaseQty = (sku, orderQty) => {
		if (orderQty > 1) {
			const newQty = orderQty - 1;
			decreaseOrderQuantity(newQty, sku, dispatch);
		} else {
			handleDelete(sku);
		}
	};

	const handleDelete = (sku) => {
		removeFromCart(sku, dispatch);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenQtyAlert(false);
	};

	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}

	const useStyles = makeStyles((theme) => ({
		productList: {
			textAlign: "center",
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Grid container item xs={12} className={classes.productList}>
				<Grid container item direction="row" xs={12} sm={12}>
					<Grid item xs={4} sm={2}></Grid>
					<Grid item xs={2} sm={2}>
						<Typography variant="subtitle1">Product</Typography>
					</Grid>
					<Grid item xs={1} sm={2}>
						<Typography variant="subtitle1">Size</Typography>
					</Grid>
					<Grid item xs={2} sm={2}>
						<Typography variant="subtitle1">Qty</Typography>
					</Grid>
					<Grid item xs={1} sm={2}>
						<Typography variant="subtitle1">Price</Typography>
					</Grid>
					<Grid item xs={2} sm={2}></Grid>
				</Grid>

				{cart &&
					cart.map((lineItem) => {
						return (
							<Grid
								container
								item
								direction="row"
								key={lineItem.sku}
								alignItems="center"
								xs={12}
							>
								<Grid item xs={4} sm={2}>
									<Link to={`/products/${lineItem.id}`}>
										<CartProductImg
											imageUrl={lineItem.imageUrl}
											altText={lineItem.title}
										/>
									</Link>
								</Grid>
								<Grid item xs={2} sm={2}>
									<Link
										to={`/products/${lineItem.id}`}
										style={{ textDecoration: "none" }}
									>
										<Typography variant="body1">{lineItem.title}</Typography>
									</Link>
								</Grid>
								<Grid item xs={1} sm={2}>
									<Typography variant="body1">{lineItem.size}</Typography>
								</Grid>
								<Grid item xs={2} sm={2}>
									<Box
										display="flex"
										alignItems="center"
										justifyContent="center"
									>
										<IconButton
											aria-label="add"
											onClick={() =>
												handleIncreaseQty(
													lineItem.sku,
													lineItem.orderQty,
													lineItem.availableQty
												)
											}
										>
											<AddIcon fontSize="small" />
										</IconButton>
										<Typography variant="body1">{lineItem.orderQty}</Typography>
										<IconButton
											aria-label="remove"
											onClick={() =>
												handleDecreaseQty(lineItem.sku, lineItem.orderQty)
											}
										>
											<RemoveIcon fontSize="small" />
										</IconButton>
									</Box>
								</Grid>
								<Grid item xs={1} sm={2}>
									<Typography variant="body1">
										{`£${lineItem.price.toFixed(2)}`}
									</Typography>
								</Grid>

								<Grid item xs={1} sm={2}>
									<IconButton
										aria-label="delete"
										onClick={() => handleDelete(lineItem.sku)}
									>
										<ClearIcon fontSize="small" />
									</IconButton>
								</Grid>
							</Grid>
						);
					})}
			</Grid>
			<Snackbar
				open={openQtyAlert}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="info">
					Only {`${availableStock}`} available
				</Alert>
			</Snackbar>
		</>
	);
};

export default CartProductList;
