import React from "react";
import { Box, Typography } from "@material-ui/core";

const ProductDescription = () => {
	return (
		<>
			<Box p={3}>
				<Typography variant="h5" component="h3" gutterBottom>
					Description
				</Typography>
				<Typography variant="body1" component="h2">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
					blanditiis quas sunt doloremque dignissimos repellat nisi, praesentium
					distinctio quia quidem corrupti consectetur ex tempora tempore aperiam
					laboriosam mollitia ducimus nesciunt!
				</Typography>
			</Box>
		</>
	);
};

export default ProductDescription;
