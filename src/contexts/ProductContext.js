import React, { createContext, useState } from "react";
import ProductList from "../productdata";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
	const [products, setProducts] = useState(ProductList);

	return (
		<ProductContext.Provider value={{ products }}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
