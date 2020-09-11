import React, { useState, useEffect } from "react";
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
import firebase from "../../config/firebase";
import { fetchImage } from "../../helpers/images/imageHelpers";
import Skeleton from "@material-ui/lab/Skeleton";

const ProductCard = ({ product, imageUrl }) => {
	const [productImg, setProductImg] = useState("");

	useEffect(() => {
		fetchImage(firebase, imageUrl).then((url) => setProductImg(url));
	}, [imageUrl]);

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
			{productImg ? (
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="300"
					image={productImg}
					title={product.title}
				/>
			) : (
				<Skeleton variant="rect" width={375} height={300} />
			)}

			<CardHeader
				title={product.title}
				subheader={`£${product.price.toFixed(2)}`}
			/>
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
