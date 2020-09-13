import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardMedia, makeStyles } from "@material-ui/core";
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
			width: "360px",
			height: "384px",
			margin: 20,
		},
		cardImage: {
			height: "auto",
			maxHeight: "290px",
			width: "auto",
			maxWidth: "365px",
		},
	}));

	const classes = useStyles(makeStyles);

	return (
		<Card className={classes.card}>
			{productImg ? (
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					image={productImg}
					title={product.title}
					className={classes.cardImage}
				/>
			) : (
				<Skeleton variant="rect" width={365} height={290} />
			)}

			<CardHeader
				title={product.title}
				subheader={`£${product.price.toFixed(2)}`}
			/>
		</Card>
	);
};

export default ProductCard;
