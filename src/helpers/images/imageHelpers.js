export const fetchImage = async (firebase, imageUrl) => {
	const storage = firebase.storage();
	const storageRef = storage.refFromURL(imageUrl);
	return await storageRef.getDownloadURL();
};
