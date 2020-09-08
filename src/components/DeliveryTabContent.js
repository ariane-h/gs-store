import React from "react";
import { Typography, Divider, Box } from "@material-ui/core";

const DeliveryTabContent = () => {
	return (
		<>
			<Box pb={2}>
				<Typography variant="body1" gutterBottom>
					UK Standard Delivery
				</Typography>
				<Typography variant="body1" gutterBottom>
					£3.50 or FREE on full price items
				</Typography>
				<Typography variant="body1" gutterBottom>
					Delivery within 3-5 working days
				</Typography>
				<Divider />
			</Box>

			<Box pb={2}>
				<Typography variant="body1" gutterBottom>
					Next Day Delivery
				</Typography>
				<Typography variant="body1" gutterBottom>
					£6 or FREE on orders over £80
				</Typography>
				<Typography variant="body1" gutterBottom>
					Order by 5pm Mon-Fri
				</Typography>
				<Divider />
			</Box>

			<Box pb={2}>
				<Typography variant="body1" gutterBottom>
					International Delivery Cost dependant on country
				</Typography>

				<Typography variant="body1" gutterBottom>
					Cost dependant on country
				</Typography>
				<Typography variant="body1" gutterBottom>
					International Standard Delivery within 5-10 working days
				</Typography>

				<Divider />
			</Box>
		</>
	);
};

export default DeliveryTabContent;
