import React from "react";
import { Button, Box } from "@material-ui/core";

const CheckoutButton = () => {
	return (
		<>
			<Box pt={2} pl={1}>
				<Button variant="contained" color="primary" size="large">
					Checkout
				</Button>
			</Box>
		</>
	);
};

export default CheckoutButton;
