import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";

const CartEmpty = () => {
	return (
		<div>
			<Grid container justify="center">
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
};

export default CartEmpty;
