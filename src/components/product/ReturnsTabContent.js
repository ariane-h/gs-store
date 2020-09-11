import React from "react";
import { Typography, Box } from "@material-ui/core";

const ReturnsTabContent = () => {
	return (
		<Box pb={2}>
			<Typography variant="body1" gutterBottom>
				Not happy with a purchase? No problem.
			</Typography>
			<Typography variant="body1" gutterBottom>
				You can return to via Courier or to one of our UK stores within 28 days
				of purchase.
			</Typography>
			<Typography variant="body1" gutterBottom>
				Footwear should be unworn and in its original packaging. Your refund
				will then be processed back to your original method of payment.
			</Typography>
			<Typography variant="body1" gutterBottom>
				Click here for more information on returns.
			</Typography>
		</Box>
	);
};

export default ReturnsTabContent;
