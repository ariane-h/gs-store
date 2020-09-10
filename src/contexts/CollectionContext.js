import React, { createContext, useState, useEffect } from "react";
import firebase from "../config/firebase";

export const CollectionContext = createContext();

const CollectionContextProvider = (props) => {
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		const fetchCollectionDetails = async () => {
			const db = firebase.firestore();
			return db.collection("collections").onSnapshot((snapshot) => {
				const collectionData = [];
				snapshot.forEach((collection) =>
					collectionData.push({ ...collection.data() })
				);
				setCollections(collectionData);
			});
		};

		fetchCollectionDetails();
	}, []);

	return (
		<CollectionContext.Provider value={{ collections }}>
			{props.children}
		</CollectionContext.Provider>
	);
};

export default CollectionContextProvider;
