import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";

const ProductImg = ({ imageUrl }) => {
	const [productImg, setProductImg] = useState("");

	useEffect(() => {
		if (imageUrl) {
			const loadImage = () => {
				var storage = firebase.storage();
				var gsReference = storage.refFromURL(imageUrl);

				gsReference
					.getDownloadURL()
					.then((url) => {
						setProductImg(url);
					})
					.catch((err) => console.log(err));
			};

			loadImage();
		}
	}, [imageUrl]);

	return (
		<div>
			<img src={productImg} height="440" alt="" />
		</div>
	);
};

export default ProductImg;
