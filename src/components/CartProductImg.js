import React, { useEffect, useState } from "react";
import { fetchImage } from "../helpers/images/imageHelpers";
import firebase from "../config/firebase";

const CartProductImg = ({ imageUrl, altText }) => {
	const [productImg, setProductImg] = useState("");

	useEffect(() => {
		imageUrl &&
			fetchImage(firebase, imageUrl).then((url) => setProductImg(url));
	}, [imageUrl]);
	return (
		<div>
			<img src={productImg} height="150" alt={altText} />
		</div>
	);
};

export default CartProductImg;
