export const getFirebaseImage = (imageUrl, firebase, setProductImg) => {
	if (imageUrl) {
		const getImgUrl = async () => {
			var storage = firebase.storage();
			var gsReference = storage.refFromURL(imageUrl);

			gsReference
				.getDownloadURL()
				.then((url) => {
					setProductImg(url);
				})
				.catch((err) => console.log(err));
		};

		getImgUrl();
	}
};
