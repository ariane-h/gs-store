import React, { createContext, useState, useEffect } from "react";
import firebase from "../config/firebase";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const db = firebase.firestore();
			return db.collection("products").onSnapshot((snapshot) => {
				const productData = [];
				snapshot.forEach((product) =>
					productData.push({ ...product.data(), id: product.id })
				);
				setProducts(productData);
			});
		};

		fetchProducts();
	}, []);

	// filter collection products
	const filterCollectionProducts = (collectionId, setCollectionProducts) => {
		const filterProducts = async () => {
			const collectionProducts = products.filter(
				(product) => collectionId && product.collections[collectionId]
			);
			return collectionProducts;
		};

		//update the state
		const updateCollectionProducts = async () => {
			const matchingProducts = await filterProducts();
			setCollectionProducts(matchingProducts);
			return { matchingProducts };
		};

		updateCollectionProducts();
	};

	return (
		<ProductContext.Provider value={{ products, filterCollectionProducts }}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
