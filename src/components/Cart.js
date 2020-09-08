import React, { useContext } from "react";
import { Typography, Grid, Box, IconButton } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CheckoutButton from "./CheckoutButton";
import CartTotal from "./CartTotal";
import CartProductImg from "./CartProductImg";

const Cart = () => {
	const { cart, dispatch } = useContext(CartContext);

	const handleIncreaseQty = (sku, orderQty, availableQty) => {
		if (orderQty < availableQty) {
			dispatch({ type: "INCREASE_QTY", sku });
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

	const generateImage = (imageUrl) => {
		console.log(imageUrl);
	};

	if (!cart.length) {
		return (
			<div>
				<Grid container>
					<Grid item>
						<Box mt={3} mb={5}>
							<Typography variant="h5">
								There's nothing in your cart yet
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</div>
		);
	} else {
		return (
			<>
				<Grid
					container
					item
					xs={12}
					alignItems="center"
					justify="center"
					direction="column"
				>
					{/* row one */}

					<Grid item xs={12}>
						<Box mt={3} mb={5}>
							<Typography variant="h5" component="h1">
								Cart
							</Typography>
						</Box>
					</Grid>

					<Grid container item xs={12}>
						<Grid item xs={false} sm={1}></Grid>

						<Grid container item spacing={3} sm={10}>
							<Grid container direction="row">
								<Grid item xs={2}></Grid>
								<Grid item xs={2}>
									<Typography variant="subtitle1">Product</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography variant="subtitle1">Size</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography variant="subtitle1">Qty</Typography>
								</Grid>
								<Grid item xs={2}>
									<Typography variant="subtitle1">Price</Typography>
								</Grid>
							</Grid>

							{cart &&
								cart.map((lineItem) => {
									return (
										<Grid
											container
											direction="row"
											key={lineItem.sku}
											justify="center"
											alignItems="center"
											textalign="center"
										>
											<Grid item xs={2}>
												<CartProductImg
													imageUrl={lineItem.imageUrl}
													altText={lineItem.title}
												/>
											</Grid>
											<Grid item xs={2}>
												<Typography variant="body1">
													{lineItem.title}
												</Typography>
											</Grid>
											<Grid item xs={2}>
												<Typography variant="body1">{lineItem.size}</Typography>
											</Grid>
											<Grid item xs={2}>
												<Box
													display="flex"
													justify="center"
													alignItems="center"
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
													<Typography variant="body1">
														{lineItem.orderQty}
													</Typography>
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
											<Grid item xs={2}>
												<Typography variant="body1">
													{`£${lineItem.price}`}
												</Typography>
											</Grid>

											<Grid item xs={2}>
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

						<Grid item xs={false} sm={1}></Grid>
					</Grid>

					<Grid container item direction="column" xs={12}>
						<Grid container item>
							<Grid item xs={6}></Grid>
							<Grid container item xs={6}>
								<Box mt={10}>{cart && <CartTotal cartItems={cart} />}</Box>
							</Grid>
						</Grid>
						<Grid container item>
							<Grid item xs={6}></Grid>
							<Grid item xs={6}>
								<Box>
									<CheckoutButton />
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</>
		);
	}
};

export default Cart;
