import React, { useEffect, useState } from "react";
import firebase from "../../config/firebase";
import { fetchImage } from "../../helpers/images/imageHelpers";
import { makeStyles, Box } from "@material-ui/core";

const ProductImg = ({ imageUrl }) => {
	const [productImg, setProductImg] = useState("");

	const useStyles = makeStyles({
		productImage: {
			paddingTop: "40px",
		},
		imageContainer: {
			display: "flex",
			justifyContent: "center",
		},
	});

	const classes = useStyles();

	useEffect(() => {
		imageUrl &&
			fetchImage(firebase, imageUrl).then((url) => setProductImg(url));
	}, [imageUrl]);

	return (
		<Box className={classes.imageContainer}>
			<img
				src={productImg}
				height="500"
				alt=""
				className={classes.productImage}
			/>
		</Box>
	);
};

export default ProductImg;
