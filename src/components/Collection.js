import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../contexts/ProductContext";
import { Grid } from "@material-ui/core";

const Collection = () => {
	const { products } = useContext(ProductContext);

	const productCard = (product) => {
		return (
			<Grid container item xs={12} sm={4} key={product.id}>
				<ProductCard {...product} />
			</Grid>
		);
	};

	return (
		<div>
			<Grid container direction="row">
				<Grid item sm={3}>
					<h1>sidebar</h1>
				</Grid>

				<Grid container item spacing={3} sm={9}>
					{products.map((product) => productCard(product))}
				</Grid>
			</Grid>
		</div>
	);
};

export default Collection;
