import React from "react";
import { Box, Typography } from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const ProductReviews = () => {
	return (
		<>
			<Box pl={3}>
				<Box>
					<Typography variant="h5" component="h3" gutterBottom>
						Reviews
					</Typography>
				</Box>
				<Box pb={2}>
					<StarRoundedIcon />
					<StarRoundedIcon />
					<StarRoundedIcon />
					<StarRoundedIcon />
					<StarRoundedIcon />
				</Box>
				<Box>
					<Typography variant="subtitle2" component="p" gutterBottom>
						username
					</Typography>
					<Typography variant="body2" component="p" gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis id
						est impedit ad nisi iste obcaecati autem laborum aperiam eius
						voluptate modi animi eveniet eos aliquid ut, similique maxime sed.
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default ProductReviews;
