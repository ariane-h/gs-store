import React from "react";
import {
	Typography,
	Grid,
	Box,
	IconButton,
	makeStyles,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CartProductImg from "./CartProductImg";
import { increaseOrderQuantity } from "../actions/cartActions";

const CartProductList = ({ cart, dispatch }) => {
	const handleIncreaseQty = (sku, orderQty, availableQty) => {
		if (orderQty < availableQty) {
			// dispatch({ type: "INCREASE_QTY", sku });
			// increaseOrderQuantity(newQty, product, dispatch);
		} else {
			alert(`only ${availableQty} available`);
		}
	};

	const handleDecreaseQty = (sku, orderQty) => {
		orderQty > 1 ? dispatch({ type: "DECREASE_QTY", sku }) : handleDelete(sku);
	};

	const handleDelete = (sku) => {
		dispatch({ type: "REMOVE_FROM_CART", sku });
	};

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
									<CartProductImg
										imageUrl={lineItem.imageUrl}
										altText={lineItem.title}
									/>
								</Grid>
								<Grid item xs={2} sm={2}>
									<Typography variant="body1">{lineItem.title}</Typography>
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
		</>
	);
};

export default CartProductList;
