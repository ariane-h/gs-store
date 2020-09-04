import React, { createContext, useState, useEffect } from "react";
import ProductList from "../productdata";
import firebase from "../config/fbConfig";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
	// const [products, setProducts] = useState(ProductList);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const db = firebase.firestore();
		return db.collection("products").onSnapshot((snapshot) => {
			const productData = [];
			snapshot.forEach((product) =>
				productData.push({ ...product.data(), id: product.id })
			);
			setProducts(productData);
		});
	}, []);

	return (
		<ProductContext.Provider value={{ products }}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
