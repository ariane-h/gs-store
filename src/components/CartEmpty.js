import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";

const CartEmpty = () => {
	return (
		<Grid container justify="center">
			<Grid item>
				<Box mt={10} mb={5}>
					<Typography variant="h5">
						There's nothing in your cart yet.
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default CartEmpty;
