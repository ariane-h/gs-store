import React, { useState } from "react";
import { Box } from "@material-ui/core";
import firebase from "firebase";

const Home = () => {
	const [imageUrl, setImageUrl] = useState("");

	const getImage = () => {
		var storage = firebase.storage();
		var gsReference = storage.refFromURL(
			"gs://shoe-shop-f5df2.appspot.com/nike-air-max.jpg"
		);

		gsReference
			.getDownloadURL()
			.then((url) => {
				setImageUrl(url);
			})
			.catch((err) => console.log(err));
	};

	getImage();

	return (
		<>
			<Box>
				<img src={imageUrl} alt="" />
			</Box>
		</>
	);
};

export default Home;
