import React, { useContext } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { CartContext } from "../../contexts/CartContext";
import CheckoutButton from "./CheckoutButton";
import CartTotal from "./CartTotal";
import CartEmpty from "./CartEmpty";
import CartProductList from "./CartProductList";

const Cart = () => {
	const { cart, dispatch } = useContext(CartContext);

	if (!cart.length) {
		return <CartEmpty />;
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
					<Grid item xs={12}>
						<Box mt={3} mb={5}>
							<Typography variant="h5" component="h1">
								Cart
							</Typography>
						</Box>
					</Grid>

					<CartProductList cart={cart} dispatch={dispatch} />
				</Grid>

				<Grid container>
					<Grid item xs={false} sm={8}></Grid>
					<Grid item xs={12} sm={4}>
						<Box pt={2}>
							<Box height="200px">{cart && <CartTotal cartItems={cart} />}</Box>
							<Box>
								<CheckoutButton />
							</Box>
						</Box>
					</Grid>
				</Grid>
			</>
		);
	}
};

export default Cart;
