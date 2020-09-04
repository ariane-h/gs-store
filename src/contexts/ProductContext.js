import React, { createContext, useState, useEffect } from "react";
import firebase from "../config/firebase";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			return db.collection("products").onSnapshot((snapshot) => {
				const productData = [];
				snapshot.forEach((product) =>
					productData.push({ ...product.data(), id: product.id })
				);
				setProducts(productData);
			});
		};
		fetchData();
	}, []);

	return (
		<ProductContext.Provider value={{ products }}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
