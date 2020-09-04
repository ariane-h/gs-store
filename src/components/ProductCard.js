import React from "react";
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	makeStyles,
} from "@material-ui/core";

const ProductCard = ({ product }) => {
	const useStyles = makeStyles((theme) => ({
		card: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
		},
	}));

	const classes = useStyles(makeStyles);

	return (
		<Card className={classes.card}>
			<CardMedia
				component="img"
				alt="Contemplative Reptile"
				height="300"
				image={product.imageUrl}
				title={product.title}
			/>
			<CardHeader title={product.title} subheader={product.price} />
			<CardContent>
				<Typography variant="body2" component="p">
					{product.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Add To Cart</Button>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
