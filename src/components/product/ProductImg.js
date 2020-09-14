import React, { useEffect, useState } from "react";
import firebase from "../../config/firebase";
import { fetchImage } from "../../helpers/images/imageHelpers";
import { makeStyles, Box } from "@material-ui/core";

const ProductImg = ({ imageUrl }) => {
	const [productImg, setProductImg] = useState("");

	const useStyles = makeStyles((theme) => ({
		productImage: {
			paddingTop: "40px",
			height: 500,
			[theme.breakpoints.down("xs")]: {
				height: 350,
			},
		},
		imageContainer: {
			display: "flex",
			justifyContent: "center",
		},
	}));

	const classes = useStyles();

	useEffect(() => {
		imageUrl &&
			fetchImage(firebase, imageUrl).then((url) => setProductImg(url));
	}, [imageUrl]);

	return (
		<Box className={classes.imageContainer}>
			<img src={productImg} alt="" className={classes.productImage} />
		</Box>
	);
};

export default ProductImg;
