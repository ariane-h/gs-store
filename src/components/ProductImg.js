import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";
import { fetchImage } from "../helpers/images/imageHelpers";

const ProductImg = ({ imageUrl }) => {
	const [productImg, setProductImg] = useState("");

	useEffect(() => {
		imageUrl &&
			fetchImage(firebase, imageUrl).then((url) => setProductImg(url));
	}, [imageUrl]);

	return <img src={productImg} height="440" alt="" />;
};

export default ProductImg;
