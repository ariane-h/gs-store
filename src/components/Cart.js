import React, { useContext } from "react";
import { Typography, Grid, Box, IconButton } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import DeleteIcon from "@material-ui/icons/Delete";

const Cart = () => {
	const { cart, dispatch } = useContext(CartContext);

	const handleDelete = (sku) => {
		dispatch({ type: "REMOVE_FROM_CART", sku });
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
				<Grid container item xs={12} alignItems="center" justify="center">
					<Box mt={3} mb={5}>
						<Typography variant="h5" component="h1">
							Cart
						</Typography>
					</Box>

					<Grid container>
						<Grid item xs={false} sm={1}></Grid>

						<Grid container item spacing={3} sm={10}>
							<Grid container direction="row">
								<Grid item xs={2}></Grid>
								<Grid item xs={2}>
									Title
								</Grid>
								<Grid item xs={2}>
									Size
								</Grid>
								<Grid item xs={2}>
									Quantity
								</Grid>
								<Grid item xs={2}>
									Price
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
										>
											<Grid item xs={2}>
												<Typography variant="body1">
													{lineItem.imageUrl}
												</Typography>
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
												<Typography variant="body1">
													{lineItem.orderQty}
												</Typography>
											</Grid>
											<Grid item xs={2}>
												<Typography variant="body1">
													{lineItem.price}
												</Typography>
											</Grid>
											<Grid item xs={2}>
												<IconButton
													aria-label="delete"
													onClick={() => handleDelete(lineItem.sku)}
												>
													<DeleteIcon />
												</IconButton>
											</Grid>
										</Grid>
									);
								})}
						</Grid>

						<Grid item xs={false} sm={1}></Grid>
					</Grid>
				</Grid>
			</>
		);
	}
};

export default Cart;
