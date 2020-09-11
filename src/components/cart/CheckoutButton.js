import React from "react";
import { Button, Box, makeStyles } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const CheckoutButton = () => {
	const useStyles = makeStyles((theme) => ({
		button: {
			width: "200px",
			height: "50px",
			backgroundColor: teal[700],
			"&:hover": {
				backgroundColor: teal[800],
				color: "#FFF",
			},
		},
	}));

	const classes = useStyles();
	return (
		<Box pt={2} pl={1}>
			<Button
				variant="contained"
				size="large"
				className={classes.button}
				color="primary"
			>
				Checkout
			</Button>
		</Box>
	);
};

export default CheckoutButton;
